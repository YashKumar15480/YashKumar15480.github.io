using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Data;
using DMS.Foundation.Extension.Models.DisplayData;

namespace DMS.Foundation.Extension.Services
{
    public class SolrPageService
    {
        public DisplayDataModel GetPageDetails(ID itemId)
        {
            using (var context = ContentSearchManager.GetIndex("sitecore_web_index").CreateSearchContext())
            {
                var results = context.GetQueryable<SearchResultItem>()
                                    .Where(item => item.ItemId == itemId)
                                    .FirstOrDefault();

                if (results != null)
                {
                    // Assuming "title", "subtitle", "description" are the Solr field names
                    string title = results["title"];
                    string subtitle = results["subtitle"];
                    string content  = results["content"];

                    return new DisplayDataModel
                    {
                        Title = title,
                        Subtitle = subtitle,
                        Content = content
                    };
                }
            }

            return null;
        }
    }
}
