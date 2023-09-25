using Sitecore.XA.Foundation.Mvc.Controllers;
using System.Web.Mvc;
using System;
using DMS.Foundation.Logging.Log;
using DMS.Foundation.Logging.Models;
using Sitecore.XA.Foundation.Mvc.Repositories.Base;
using DMS.Feature.Content.Repositories.StudentProfile;
namespace DMS.Feature.Content.Controllers
{

    public class StudentProfileController : StandardController
    {
        private readonly ILogHandler _logger;
        private readonly IStudentProfileRepository _repo;

        public StudentProfileController (IStudentProfileRepository StudentProfileRepository, ILogHandler logger)
        {
            _repo = StudentProfileRepository;
            _logger = logger;
        }

        public override ActionResult Index()
        {
            try
            {
                IRenderingModelBase StudentProfileModel = _repo.GetModel();
                string customViewPath = StudentProfileModel.Rendering?.Parameters["CustomViewPath"];

                if (!String.IsNullOrEmpty(customViewPath))
                {
                    return PartialView(customViewPath, StudentProfileModel);
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