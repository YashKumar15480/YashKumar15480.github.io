using DMS.Feature.Content.Constants;
using DMS.Feature.Content.Models.StudentProfile;
using DMS.Feature.Content.Repositories.StudentProfile;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.FakeDb;
using System;
using System.Linq;
using Sitecore.Data.Items;

namespace DMS.Feature.Content.Test.StudentProfile
{
    [TestClass]
    public class StudentProfileUnitTestRepo
    {
        readonly ID TemplateID = ID.NewID;
        readonly StudentProfileModel model = new StudentProfileModel();
        readonly ID DeskImgID = ID.NewID;
        readonly ID MobImgID = ID.NewID;
        const string imageUrl = "~/media/image.ashx";

        [TestMethod]
        public void CheckRepository()
        {
            // Arrange
            using (var db = new Db
            {
                new DbItem("StudentProfileItem")
                {
                    { Constants.StudentProfileConstants.StudentNameField, "AnyName" },
                    { Constants.StudentProfileConstants.StudentProfileField, "Profile" },
                    { Constants.StudentProfileConstants.SubjectListField, "{TargetItem1}|{TargetItem2}" },
                    { Constants.StudentProfileConstants.SubjectsField,"MCA" },
                }
            })
            {
                {
                    var repository = new StudentProfileRepository();
                    var itemPath = "/sitecore/content/StudentProfileItem";
                    var studentModel = new StudentProfileModel();
                    var item = db.GetItem(itemPath);
                    studentModel.DataSourceItem = item;
                    var model = repository.FillExtraProperties(studentModel);

                    Assert.AreEqual("AnyName", model.StudentName);
                    Assert.AreEqual("Profile", model.StudentProfile);
                    Assert.AreEqual("MCA", model.SubjectNames);

                }
            }

        }
        [TestMethod]
        public void CheckLink()
        {
            ID linkdenLinkId = new ID();

            using (Db db = new Db
            {
                new DbItem("link")
                {
                    Fields =
                    {
                        new DbLinkField("linkCheck", StudentProfileConstants.LinkedInLinkField){
                            TargetID = new ID(),
                                LinkType = "external",
                                Url = "http://www.test.com",
                                Target = "_blank" },
                    }
                }
            })
                {
                    {

                    var repository = new StudentProfileRepository();
                    var itemPath = "/sitecore/content/link";
                    var studentModel = new StudentProfileModel();
                    var item = db.GetItem(itemPath);
                    studentModel.DataSourceItem = item;
                    var model = repository.FillExtraProperties(studentModel);

                    Assert.IsNotNull(model.LinkedInLink);
                    Assert.AreEqual("http://www.test.com", model.LinkedInLink.Url);
                }
            }
        }

        [TestMethod]
        public void CheckImages()
        {
            ID template = new ID();
            using (Db db = new Db
             {
                new DbItem("DesktopImg", DeskImgID),
                new DbItem("MobileImg", MobImgID),
                new DbTemplate("StudentProfileImageItem", template)
                    {
                        Fields = {
                        new DbField ("DesktopImg", Constants.StudentProfileConstants.StudentImageDesktopField),
                        new DbField ("MobileImg", Constants.StudentProfileConstants.StudentImageMobileField)
                    }

                    },
                new DbItem("Images", new ID(), template) 
                {
                    {"DesktopImg",$"<link linktype=\"media\" mediaid=\"{DeskImgID.ToString()}\" />" },
                    {"MobileImg",$"<link linktype=\"media\" mediaid=\"{MobImgID.ToString()}\" />" }
                }
            })
            {
                {


                    Item DesktopImg = db.GetItem(DeskImgID);
                    var desktopMediaProvider = Substitute.For<Sitecore.Abstractions.BaseMediaManager>();
                    desktopMediaProvider.GetMediaUrl(Arg.Is<MediaItem>(i => i.ID == DeskImgID)).Returns(imageUrl);
                  
                    Item MobileImg = db.GetItem(MobImgID);
                    var mobileMediaProvider = Substitute.For<Sitecore.Abstractions.BaseMediaManager>();
                    mobileMediaProvider.GetMediaUrl(Arg.Is<MediaItem>(i => i.ID == MobImgID)).Returns(imageUrl);

                    var repository = new StudentProfileRepository();
                    var itemPath = "/sitecore/content/Images";
                    var studentModel = new StudentProfileModel();
                    var item = db.GetItem(itemPath);
                    studentModel.DataSourceItem = item;
                    var model = repository.FillExtraProperties(studentModel);

                    Assert.IsNotNull(model);
                    Assert.IsNotNull(model.StudentImageDesktop);
                    Assert.IsNotNull(model.StudentImageMobile);

                    //Assert.AreEqual("~/media/image.ashx", model.StudentImageDesktop.ImageUrl);
                    //Assert.AreEqual("~/media/image.ashx", model.StudentImageDesktop.ImageUrl);

                }
            }
        }
    }
}
