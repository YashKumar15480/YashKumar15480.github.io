using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using EDEP.Foundation.BackgroundJob.Services;
using EDEP.Foundation.Common.Constants;
using EDEP.Foundation.Common.Middlewares;
using EDEP.Foundation.Common.Utilities;
using EDEP.Foundation.Email.Services;
using EDEP.Foundation.ReprocessData.Repositories;
using EDEP.Foundation.ReprocessData.Services;
using EDEP.Foundation.Sitecore.Models;
using EDEP.Foundation.Sitecore.Services;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Polly;
using Polly.Extensions.Http;
using Serilog;

namespace EDEP.Api.LoremIpsum
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }

        public Startup(IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            Configuration = builder.Build();
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();

            services.Configure<SitecoreConfig>(Configuration.GetSection("Sitecore"));


            var reprocessConfigDb = Configuration.GetSection("ReprocessData");
            var reprocessDbConStr = reprocessConfigDb["ConnectionString"];

            services.AddDbContext<ReprocessDBContext>(options =>
                options.UseSqlServer(reprocessDbConStr)
            );

            services.AddScoped<IXconnectService, XconnectService>();

            services.AddScoped<IEmailService, EmailService>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IQueJobServices, QueJobServices>();

            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
                options.JsonSerializerOptions.WriteIndented = true;
            });

            AuthorizationHelper.SetAuthorizationStartUp(services, Configuration.GetSection("Authorization"));

            services.AddAuthorization(x =>
            {
                //x.AddPolicy(AuthorizationValues.PolicyLeqembi, policy =>
                //    policy.RequireClaim("scope", AuthorizationValues.ScopeClaimLeqembi));
                x.AddPolicy(AuthorizationValues.PolicyLoremIpsum, policy =>
                    policy.RequireClaim("scope", AuthorizationValues.ScopeClaimLoremIpsum));

            });

            services.AddHttpClient<ISitecoreService, SitecoreService>
                (client =>
                {
                    client.Timeout = TimeSpan.FromSeconds(60);
                })
                .AddPolicyHandler(GetRetryPolicy());

            var jobConfigDb = Configuration.GetSection("BackgroundJob");
            var jobDbConStr = jobConfigDb["ConnectionString"];

            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UseSqlServerStorage(jobDbConStr, new SqlServerStorageOptions
                {
                    UseRecommendedIsolationLevel = true,
                    UsePageLocksOnDequeue = true,
                    DisableGlobalLocks = true,
                    PrepareSchemaIfNecessary = false
                }));

            services.AddApiVersioning(o =>
            {
                o.ReportApiVersions = true;
                o.AssumeDefaultVersionWhenUnspecified = true;
                o.DefaultApiVersion = new ApiVersion(1, 0);
            });

            services.AddMvc();
        }

        private IAsyncPolicy<HttpResponseMessage> GetRetryPolicy()
        {
            return HttpPolicyExtensions
                // HttpRequestException, 5XX and 408  
                .HandleTransientHttpError()
                // 404  
                .OrResult(msg => msg.StatusCode == System.Net.HttpStatusCode.NotFound)
                // Retry two times after delay  
                .WaitAndRetryAsync(new[]
                {
                    TimeSpan.FromSeconds(1),
                    TimeSpan.FromSeconds(2),
                    TimeSpan.FromSeconds(4),
                    TimeSpan.FromSeconds(8),
                    TimeSpan.FromSeconds(12)
                },
                onRetry: (outcome, timespan, retryAttempt, context) =>
                {
                    Log.Warning("Delaying for {delay}ms, then making retry {retry}.", timespan.TotalMilliseconds, retryAttempt);
                });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSessionIDHandling();
            app.UseGlobalExceptionHandling();

            app.UseRouting();
            app.UseSerilogRequestLogging();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            using var scope = app.ApplicationServices.CreateScope();
            var _queJobServices = scope.ServiceProvider.GetRequiredService<IQueJobServices>();

            EDEP.Foundation.Common.Models.ResponseExtensions.Configure(app.ApplicationServices.GetRequiredService<IHttpContextAccessor>(),
             _queJobServices);
        }
    }
}
