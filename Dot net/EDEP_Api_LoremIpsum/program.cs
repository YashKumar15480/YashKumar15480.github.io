using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EDEP.Foundation.Common.Utilities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;

namespace EDEP.Api.LoremIpsum

{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = ConfigHelper.GetConfig("appsettings.json");
            var appConfig = config.GetSection("Application");
            var wsName = appConfig["Name"];

            Log.Logger = LoggerHelper.GetLoggerConfiguration();

            try
            {
                Log.Information("Starting up {WebserviceName}", wsName);
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Fatal("Application {WebserviceName} start-up failed: {Error}", wsName, ex);
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
              {
                webBuilder.UseStartup<Startup>();
             })
            .UseSerilog();
    }
 }
