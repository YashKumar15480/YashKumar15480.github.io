using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DMS.Foundation.Extension.Services
{
    public interface IcsvReaderService
    {
        Task ReadCsvAndExecuteAsync(string csvFilePath, Func<string, Task> action);
    }
}
