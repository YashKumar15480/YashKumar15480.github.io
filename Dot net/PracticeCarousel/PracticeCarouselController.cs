using DMS.Feature.Gallery.Repository;
using Sitecore.XA.Foundation.Mvc.Controllers;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DMS.Feature.Gallery.Controllers
{
    public class PracticeCarouselController : StandardController
    {
        private IPracticeCarouselRepository Repository { get; set; }
        public PracticeCarouselController (IPracticeCarouselRepository PracticeCarouselRepository)
        {
            this.Repository = PracticeCarouselRepository;
        }
        protected override object GetModel()
        {
            return this.Repository.GetModel();
        }

        public override ActionResult Index()
        {
            string customviewPath = Rendering.Parameters["CustomViewPath"];

            if (!String.IsNullOrEmpty(customviewPath))
                return PartialView(customviewPath, this.GetModel());
            else
                return PartialView(GetIndexViewName(), GetModel());
        }
    }
}