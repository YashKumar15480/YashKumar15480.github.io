using System;
using Sitecore.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DMS.Feature.Gallery.Constants
{
    public class PracticeCarouselConstants
    {
        public static class Carousel
        {
            public static readonly ID TemplateId = new ID("{0001095A-D316-43E6-922E-E489E786C881}");
            public const string TitleDetail = "{5493D472-13E3-4EE5-BF1B-17418CA17E35}";
            public const string SubTitleDetail = "{E74734A1-FE37-4A11-8AE5-E68435AC9E87}";
        }
        public static class CarouselItem
        {
            public static readonly ID TemplateId = new ID("{D9058DDF-ED5B-4F2D-B98A-D43FEE45A707}");
            public const string ItemTitleDetail = "{D8529C5E-A7A3-49D1-B357-3E3A1733537D}";
            public const string ItemDesktopImageDetail = "{F203E166-B94C-4106-B9AA-9D0BDE4AD1FE}";
            public const string ItemMobileImageDetail = "{411C3E1D-8C47-4136-986E-425BEC7A2E34}";
            public const string ItemDescriptionDetail = "{58EDE28F-9F51-46DF-8CD8-9DDD0A26BFDF}";

        }
    }
}