using Sitecore.XA.Foundation.Mvc.Repositories.Base;
using DMS.Feature.Content.Models.TwoTitleSection;
using DMS.Foundation.DependencyInjection;
using System.Diagnostics.CodeAnalysis;
using System;
using Sitecore.Data.Fields;
using DMS.Foundation.Extension.Helper;
using System.Linq;
using System.Collections.Generic;

namespace DMS.Feature.Content.Repositories.TwoTitleSection
{
    [Service(typeof(ITwoTitleSectionRepository))]
    public class TwoTitleSectionRepository : ModelRepository, ITwoTitleSectionRepository
    {
        public override IRenderingModelBase GetModel()
        {
            var model = new TwoTitleSectionModel();
            FillBaseProperties(model);
            FillExtraProperties(model);
            return model;
        }

        private TwoTitleSectionModel FillExtraProperties(TwoTitleSectionModel model)
        {
            try 
            { 
                var item = model.DataSourceItem;
                if(item != null)
                {
                    model.TitleDetails = item.Fields[Constants.TwoTitleSectionConstants.TitleField]?.Value ?? string.Empty;
                    model.SubTitleDetails = item.Fields[Constants.TwoTitleSectionConstants.SubTitleField]?.Value ?? string.Empty;
                    model.DescriptionDetails = item.Fields[Constants.TwoTitleSectionConstants.DescriptionField]?.Value ?? string.Empty;
                }
            }

            catch (Exception ex)
            {
                Sitecore.Diagnostics.Log.Error("Error occurred in TwoTitleSection Repository", ex, this);

            }
            return model;
        }
    }
}