using DMS.Foundation.Extension.Models;
using Sitecore.Data.Items;
using Sitecore.XA.Foundation.Mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DMS.Feature.Gallery.Models
{
        public class PracticeCarouselModel : RenderingModelBase
        {
            public string Title { get; set; }
            public string SubTitle { get; set; }
            public IEnumerable<PracticeCarouselModelItem> PracticeCarouselItems { get; set; }
        }

        public class PracticeCarouselModelItem
        {
            public string ItemTitle { get; set; }
            public string ItemDescription { get; set; }
            public string ItemDesktopImg { get; set; }
            public string ItemMobileImg { get; set; }
            public Item SitecoreItem { get; set; }

    }
}
