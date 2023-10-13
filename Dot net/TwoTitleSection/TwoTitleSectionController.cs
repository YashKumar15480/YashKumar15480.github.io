using Sitecore.XA.Foundation.Mvc.Controllers;
using System.Web.Mvc;
using System;
using DMS.Foundation.Logging.Log;
using DMS.Foundation.Logging.Models;
using Sitecore.XA.Foundation.Mvc.Repositories.Base;
using DMS.Feature.Content.Repositories.TwoTitleSection;

namespace DMS.Feature.Content.Controllers
{
    public class TwoTitleSectionController : StandardController
    {
        private readonly ILogHandler _logger;
        private readonly ITwoTitleSectionRepository _repo; 

        public TwoTitleSectionController(ITwoTitleSectionRepository TwoTitleSectionRepository, ILogHandler logger)
        {
            _repo = TwoTitleSectionRepository;
            _logger = logger;
        }
        
        public override ActionResult Index()
        {
            try
            {
                IRenderingModelBase TwoTitleSectionModel = _repo.GetModel();
                string customViewPath = TwoTitleSectionModel.Rendering?.Parameters["CustomViewPath"];

                if (!String.IsNullOrEmpty(customViewPath))
                {
                    return PartialView(customViewPath, TwoTitleSectionModel);
                }
            }
            catch (Exception ex)
            {
                LogModel exceptionmodel = new LogModel()
                {
                    Exception = ex,
                    PageUrl = Sitecore.Context.RawUrl,
                    PageItem = Sitecore.Context.Item.ID.ToString(),
                    LogType = LogType.Error
                };
                _logger.LogInfo(exceptionmodel);
            }
            return new EmptyResult();
        }
    }
}