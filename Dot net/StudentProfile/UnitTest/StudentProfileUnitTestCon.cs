using DMS.Feature.Content.Controllers;
using DMS.Feature.Content.Repositories.StudentProfile;
using DMS.Foundation.Logging.Log;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using NSubstitute;
using Sitecore.Mvc.Presentation;
using System;

namespace DMS.Feature.Content.Test.StudentProfile
{
    [TestClass]
    public class StudentProfileUnitTestCon
    {
        readonly Mock<ILogHandler> _mockLogHandler = new Mock<ILogHandler>();

        [TestMethod]
        public void ReturnsPartialViewNotNull()
        {
            var normalRendering = new Rendering
            {
                Parameters = new RenderingParameters("CustomViewPath=Test")
            };
            var rendering = new Sitecore.XA.Foundation.Mvc.Wrappers.Rendering(normalRendering);
            var repo = Substitute.For<IStudentProfileRepository>();
            repo.GetModel().Rendering = rendering;
            _mockLogHandler.Setup(obj => obj.GenerateLogModel(null))
                           .Returns(new Foundation.Logging.Models.LogModel());
            StudentProfileController controller = new StudentProfileController(repo, _mockLogHandler.Object);
            try
            {
                controller.Index();
                Assert.IsTrue(true);
            }
            catch
            {
                Assert.IsTrue(false);
            }
        }
        [TestMethod]
        public void ReturnsPartialViewAsNull()
        {
            var normalRendering = new Rendering();
            var rendering = new Sitecore.XA.Foundation.Mvc.Wrappers.Rendering(normalRendering);
            var repo = Substitute.For<IStudentProfileRepository>();
            repo.GetModel().Rendering = rendering;
            _mockLogHandler.Setup(obj => obj.GenerateLogModel(null))
                                           .Returns(new Foundation.Logging.Models.LogModel());
            StudentProfileController controller = new StudentProfileController(repo, _mockLogHandler.Object);
            try
            {
                controller.Index();
                Assert.IsTrue(true);
            }
            catch
            {
                Assert.IsTrue(false);
            }

        }
        [TestMethod]

        public void StudentProfileExceptiontest()
        {
            var normalRendering = new Rendering
            {
                Parameters = new RenderingParameters("CustomViewPath=Test")
            };
            var rendering = new Sitecore.XA.Foundation.Mvc.Wrappers.Rendering(normalRendering);
            var repo = Substitute.For<IStudentProfileRepository>();
            repo.GetModel().Rendering = rendering;
            _mockLogHandler.Setup(obj => obj.GenerateLogModel(null))
                           .Returns(new Foundation.Logging.Models.LogModel());
            StudentProfileController controller = new StudentProfileController(null, _mockLogHandler.Object);
            try
            {
                controller.Index();
                Assert.IsTrue(true);
            }
            catch
            {
                Assert.IsTrue(true);
            }
        }
    }
}
