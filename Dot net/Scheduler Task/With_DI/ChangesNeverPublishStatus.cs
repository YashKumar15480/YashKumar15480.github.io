using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Sitecore.SecurityModel;
using Sitecore.Data.Items;
using Sitecore.Configuration;
using Sitecore.Data;
using DMS.Foundation.Extension.Services;

namespace DMS.Foundation.ContactListManager.Tasks
{
    public class ChangeNeverPublishStatus
    {
        private readonly IcsvReaderService _csvReaderService;

        public ChangeNeverPublishStatus(csvReaderService csvReaderService)
        {
            _csvReaderService = csvReaderService;
        }

        public async Task Execute()
        {
            string csvFilePath = @"C:\Reports\unpublishpage.csv";

            if (File.Exists(csvFilePath))
            {
                await _csvReaderService.ReadCsvAndExecuteAsync(csvFilePath, SetNeverPublishAsync);
                Console.WriteLine("Pages set to unpublished successfully.");
            }
            else
            {
                Console.WriteLine("CSV file not found.");
            }
            Console.ReadLine();
        }

        public async Task SetNeverPublishAsync(string pagePath)
        {
            Item pageItem = await GetItemByPathAsync(pagePath);

            if (pageItem != null)
            {
                using (new SecurityDisabler())
                {
                    pageItem.Editing.BeginEdit();
                    pageItem.Fields["__never publish"].Value = "1";
                    pageItem.Editing.EndEdit();
                }
            }
        }

        public async Task<Item> GetItemByPathAsync(string itemPath)
        {
            Database masterDb = Factory.GetDatabase("master");
            return await Task.Run(() => masterDb.GetItem(itemPath));
        }
    }
}


//interface,implementation class

//UnpublishPageHelper.Execute();