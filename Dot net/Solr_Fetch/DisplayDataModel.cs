using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.XA.Foundation.Mvc.Models;

namespace DMS.Foundation.Extension.Models.DisplayData
{
    public class DisplayDataModel : RenderingModelBase
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Content { get; set; }
    }
}

