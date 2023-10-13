using DMS.Foundation.Extension.Models;
using Sitecore.XA.Foundation.Mvc.Models;
using Sitecore.Data.Fields;
using System.Collections.Generic;

namespace DMS.Feature.Content.Models.TwoTitleSection
{
    public class TwoTitleSectionModel : RenderingModelBase
    {
        public string TitleDetails { get; set; }
        public string SubTitleDetails { get; set; }
        public string DescriptionDetails { get; set; }
    }
}