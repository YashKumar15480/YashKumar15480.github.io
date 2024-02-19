using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace DMS.Foundation.Extension.Services
{
    public class csvReaderService : IcsvReaderService
    {
        public async Task ReadCsvAndExecuteAsync(string csvFilePath, Func<string, Task> action)
        {
            if (File.Exists(csvFilePath))
            {
                string[] lines = File.ReadAllLines(csvFilePath);

                foreach (string line in lines.Skip(1))
                {
                    string pagePath = line.Trim();
                    action(pagePath);
                }
            }
            else
            {
                Console.WriteLine("CSV file not found.");
            }
        }
    }
}