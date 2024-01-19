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

namespace DMS.Foundation.ContactListManager.Tasks
{
    public class ChangeNeverPublishStatus
    {
        public static async Task Execute()
        {
            string csvFilePath = @"C:\Reports\unpublishpage.csv";

            if (File.Exists(csvFilePath))
            {
                string[] lines = File.ReadAllLines(csvFilePath);

                foreach (string line in lines.Skip(1)) //skip fist line of csv
                {
                    string pagePath = line.Trim(); //removes leading and trailing whitespaces
                    await SetNeverPublishAsync(pagePath);
                }

                Console.WriteLine("Pages set to unpublished successfully.");
            }
            else
            {
                Console.WriteLine("CSV file not found.");
            }

            Console.ReadLine();
        }

        private static async Task SetNeverPublishAsync(string pagePath)
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

        private static async Task<Item> GetItemByPathAsync(string itemPath)
        {
            Database masterDb = Factory.GetDatabase("master"); //database in Sitecore contains the editable versions of content items.
            return await Task.Run(() => masterDb.GetItem(itemPath)); //asynchronous operation
        }
    }
}
