using DMS.Foundation.ContactListManager.Controllers;
using DMS.Foundation.ContactListManager.Helpers;
using DMS.Foundation.ContactListManager.Models;
using DMS.Foundation.ContactListManager.Repositories;
using DMS.Foundation.Extension.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Sitecore.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DMS.Foundation.ContactListManager.ServiceConfigurator
{
    public class CustomServiceConfigurator : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            // Controllers
            serviceCollection.Replace(ServiceDescriptor.Transient(typeof(CustomContactsController),
                typeof(CustomContactsController)));
            serviceCollection.Replace(ServiceDescriptor.Transient(typeof(CustomExportController),
                typeof(CustomExportController)));
            serviceCollection.AddTransient<IContactDataReaderFactory, ContactDataReaderFactory>();
            serviceCollection.AddTransient<IExportRepository, ExportRepository>();
            serviceCollection.AddTransient<IExportToCSV,ExportToCSV>();
            serviceCollection.AddTransient<IS3Client, S3Client>();
            serviceCollection.AddTransient<ISendTaskFailureEmail, SendTaskFailureEmail>();
            serviceCollection.AddTransient<IContactMergeHelper, ContactMergeHelper>();
            serviceCollection.AddTransient<IcsvReaderService, csvReaderService>();
        }
    }
}