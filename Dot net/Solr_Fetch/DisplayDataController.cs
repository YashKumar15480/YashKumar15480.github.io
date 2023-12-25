using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DMS.Foundation.Extension.Models.DisplayData;
using DMS.Foundation.Extension.Services;
using Sitecore.Data;

namespace DMS.Foundation.Extension.Controllers
{
    public class DisplayDataController : Controller
    {
        // GET: DisplayData
        public ActionResult Index()
        {
            var itemId = Sitecore.Context.Item?.ID ?? ID.Null;
            var solrPageService = new SolrPageService(); // instance of new solr service
            var details = solrPageService.GetPageDetails(itemId);
            var model = new DisplayDataModel
            {
                Title = details?.Title,
                Subtitle = details?.Subtitle,
                Content = details?.Content
            };
            return View(model);
        }
    }
}