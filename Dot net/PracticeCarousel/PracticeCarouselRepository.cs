using DMS.Feature.Gallery.Constants;
using DMS.Feature.Gallery.Models;
using DMS.Foundation.DependencyInjection;
using DMS.Foundation.Extension.Helper;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.XA.Foundation.Mvc.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Web;


namespace DMS.Feature.Gallery.Repository
{
    [Service(typeof(IPracticeCarouselRepository))]
    public class PracticeCarouselRepository : ModelRepository, IPracticeCarouselRepository
    {
        public override IRenderingModelBase GetModel()
        {
            var model = new PracticeCarouselModel();

            FillBaseProperties(model);
            FillExtraProperties(model);

            return model;
        }

        public PracticeCarouselModel FillExtraProperties(PracticeCarouselModel model)
        {
            model.Item = model.DataSourceItem;
            model.Title = model.DataSourceItem[PracticeCarouselConstants.Carousel.TitleDetail];
            model.SubTitle = model.DataSourceItem[PracticeCarouselConstants.Carousel.SubTitleDetail];

            model.PracticeCarouselItems = GetCarouselItem(model.DataSourceItem);
            return model;
        }
        public IEnumerable<PracticeCarouselModelItem> GetCarouselItem(Item parentModel)
        {
            var CarouselItems = new List<PracticeCarouselModelItem>();
            List<Item> ListOfItems = parentModel.GetChildren()
                .Where(x => x.TemplateID == PracticeCarouselConstants.CarouselItem.TemplateId)
                .ToList();

            if (ListOfItems.Count == 0) return null;

            foreach (var items in ListOfItems)
            {
                CarouselItems.Add(new PracticeCarouselModelItem
                {
                    SitecoreItem = items,
                    ItemTitle = items[PracticeCarouselConstants.CarouselItem.ItemTitleDetail],
                    ItemDescription = items[PracticeCarouselConstants.CarouselItem.ItemDescriptionDetail],
                    ItemDesktopImg = items[PracticeCarouselConstants.CarouselItem.ItemDesktopImageDetail],
                    ItemMobileImg = items[PracticeCarouselConstants.CarouselItem.ItemMobileImageDetail]
                });
            }
            return CarouselItems;
        }

    }
}
