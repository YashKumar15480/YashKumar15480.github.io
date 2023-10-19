using System;
using System.Linq;
using DMS.Feature.Gallery.Controllers;
using DMS.Feature.Gallery.Models;
using DMS.Feature.Gallery.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.FakeDb;
using Sitecore.XA.Foundation.Mvc.Wrappers;

namespace DMS.Feature.Gallery.Test
{
    [TestClass]
    public class PracticeCarouselUnitTest
    {

        ID ItemId = ID.NewID;

        //private PracticeCarouselRepository _repository { get; set; }

        [TestMethod]
        public void TestMethod1()
        {
            using (Db emptyDb = new Db()
            {
                new DbItem ("EmptyData",ItemId){}
            })
            {
                var fake = new Sitecore.FakeDb.Sites.FakeSiteContext(
                    new Sitecore.Collections.StringDictionary
                    {{"name","website"},{"database","web"} });
                using (new Sitecore.Sites.SiteContextSwitcher(fake))
                {
                    PracticeCarouselModel model = new PracticeCarouselModel();
                    model.DataSourceItem = emptyDb.GetItem("/sitecore/content/EmptyData");
                    PracticeCarouselRepository PracticeCarouselRepository = new PracticeCarouselRepository();
                    var result = PracticeCarouselRepository.FillExtraProperties(model);
                    Assert.IsNull(result.PracticeCarouselItems);
                }
            }
        }
        [TestMethod]
        public void TestMethod2()
        {
            using (Db db = new Db
            {
                new DbItem("Carousel", ItemId)
                {
                    new DbField("CarouselTitle", new ID(Constants.PracticeCarouselConstants.Carousel.TitleDetail)) { Value = "Text1 Text" },
                    new DbField("CarouselSubTitle", new ID(Constants.PracticeCarouselConstants.Carousel.SubTitleDetail)) { Value = "Text2 Text" },

                     new DbItem("ImageList", ID.NewID, Constants.PracticeCarouselConstants.CarouselItem.TemplateId)
                    {
                        new DbField("ItemTitle", new ID(Constants.PracticeCarouselConstants.CarouselItem.ItemTitleDetail)) { Value = "CarouselItemTitleText"},
                        new DbField("ItemDesc", new ID(Constants.PracticeCarouselConstants.CarouselItem.ItemDescriptionDetail)) { Value = "Description goes here"},
                        new DbField("DesktopImage", new ID(Constants.PracticeCarouselConstants.CarouselItem.ItemDesktopImageDetail)){ Value = "DesktopImage GUID"},
                        new DbField("MobileImage", new ID(Constants.PracticeCarouselConstants.CarouselItem.ItemMobileImageDetail)){ Value = "MobileImage GUID"}
                    }
                }
            })
            {
                var fakeSite = new Sitecore.FakeDb.Sites.FakeSiteContext(
                    new Sitecore.Collections.StringDictionary
                        {{ "name", "website" }, { "database", "web" }});

                using (new Sitecore.Sites.SiteContextSwitcher(fakeSite))
                {
                    PracticeCarouselModel model = new PracticeCarouselModel();
                    model.DataSourceItem = db.GetItem("/sitecore/content/Carousel");
                    PracticeCarouselRepository PracticeCarouselRepository = new PracticeCarouselRepository();
                    var result = PracticeCarouselRepository.FillExtraProperties(model);


                    Assert.AreEqual("Text1 Text", result.Title);
                    Assert.AreEqual("Text2 Text", result.SubTitle);

                    Assert.IsNotNull(result.PracticeCarouselItems);

                    var carouselItem = result.PracticeCarouselItems.FirstOrDefault();

                    Console.WriteLine(carouselItem.ItemDesktopImg);
                    Console.WriteLine(carouselItem.ItemMobileImg);
                    Console.WriteLine(carouselItem.ItemDescription);
                    Console.WriteLine(carouselItem.ItemTitle);

                    Assert.AreEqual("CarouselItemTitleText",carouselItem.ItemTitle );
                    Assert.AreEqual("Description goes here", carouselItem.ItemDescription);
                    Assert.AreEqual("DesktopImage GUID", carouselItem.ItemDesktopImg);
                    Assert.AreEqual("MobileImage GUID", carouselItem.ItemMobileImg);
                   
                }
            }
        }
    }
}
