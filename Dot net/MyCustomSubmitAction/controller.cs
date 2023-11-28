using DMS.Foundation.Logging.Log;
using Sitecore.Diagnostics;
using Sitecore.ExperienceForms.Models;
using Sitecore.ExperienceForms.Processing;
using Sitecore.ExperienceForms.Processing.Actions;
using System;
using System.Collections.Generic;
using System.Linq;
using static System.FormattableString;
using System.Reflection;
using System.Collections;
using Newtonsoft.Json;
using System.Dynamic;
using Sitecore.Data;
using DMS.Foundation.EDEPWebServices.Services;
using DMS.Foundation.EDEPWebServices.Models;
using DMS.Foundation.EDEPWebServices.Constants;
using System.Diagnostics.CodeAnalysis;
using DMS.Feature.Forms.Models.CustomSubmitAction;
using DMS.Feature.Forms.Constants.CustomSubmitAction;
using Sitecore.Data.Fields;
using System.Web;
using Newtonsoft.Json.Linq;

namespace DMS.Feature.Forms.Controllers.CustomSubmitAction
{
    public class MyCustomSubmitActionController : SubmitActionBase<string>
    {

        private readonly ILogHandler _logHandler;
        private IEDEPWebService _eDepWebServices { get; set; }

        public MyCustomSubmitActionController(ISubmitActionData submitActionData) :
          base(submitActionData)
        {
            _logHandler = new LogHandler();
            _eDepWebServices = new EDEPWebservice(new EDEPWebServicesConfig(), new ApiTokenCacheService());

        }

        [ExcludeFromCodeCoverage]
        protected override bool TryParse(string value, out string target)
        {
            target = string.Empty;
            return true;
        }

        protected override bool Execute(string data, FormSubmitContext formSubmitContext) 
        {
            var newDetails = new ExpandoObject() as IDictionary<string, Object>;
            MyCustomSubmitActionModel myCustomSubmitAction = GetMyCustomSubmitAction(formSubmitContext.ButtonId);

            foreach (var item in formSubmitContext.Fields)
            {
                IViewModel identifier = formSubmitContext.Fields.FirstOrDefault(f => Guid.Parse(f.ItemId) == Guid.Parse(item.ItemId));
                var fieldName = item.Name;
                var fieldValue = GetValue(identifier);
                var fieldCss = GetValue(identifier, "CssClass");

                if (!IsFieldExcluded(fieldCss))
                {
                    if (!string.IsNullOrEmpty(fieldValue))
                    {
                        fieldValue = GetValue(identifier).Trim();
                    }
                    newDetails.Add(fieldName, fieldValue);
                }
            }

            var result = AddDetailsToList(newDetails, myCustomSubmitAction);
            if (result?.Data != null && result?.Data is JObject && !string.IsNullOrEmpty(result?.Data["ContactId"]?.Value) && !string.IsNullOrEmpty(result?.Data["CardId"]?.Value))
            {
                HttpCookie contactid = new HttpCookie("contactid", result.Data["ContactId"].Value);
                HttpCookie listsubscriptionid = new HttpCookie("listsubscriptionid", contactListSettings.ListSubscriptionId);
                HttpCookie cardexists = new HttpCookie("cardexists", "true");
                HttpContext.Current.Response.Cookies.Add(contactid);
                HttpContext.Current.Response.Cookies.Add(listsubscriptionid);
                HttpContext.Current.Response.Cookies.Add(cardexists);
            }


        }

        public bool IsFieldExcluded(String f)
        {
            return true;
        }

        public MyCustomSubmitActionModel myCustomSubmitAction (string buttonId)
        {
            return myCustomSubmitAction;
        }
    }
}
