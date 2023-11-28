using DMS.Foundation.Exm.Models.CustomFacet;
using EDEP.Api.LoremIpsum.Models;
using EDEP.Foundation.Common.Constants;
using EDEP.Foundation.Common.Models;
using EDEP.Foundation.Sitecore.Constants;
using EDEP.Foundation.Sitecore.Models;
using EDEP.Foundation.Sitecore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Sitecore.XConnect;
using Sitecore.XConnect.Collection.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace LoremIpsum.Controllers
{
    [ApiVersion("1.0")]
    [ApiController]
    [Route("v{v:apiVersion}/[controller]")]
    public class LoremIpsumController : ControllerBase
    {
        protected readonly ILogger _logger;
        private IXconnectService _xConnectService;
       
        public LoremIpsumController(ILogger<LoremIpsumController> logger, IXconnectService xConnectService)
        {
            _logger = logger;
            _xConnectService = xConnectService;
        }

        //[Route("")]
        //public IActionResult Index()
        //{
        //    return Content("LoremIpsum EDEPWebservice. Welcome!");
        //}

        [HttpGet("CheckGet")]
        //[ValidateModel]
        //[Authorize(Policy = AuthorizationValues.PolicyLoremIpsum)]
        public IActionResult Get()
        {
            return Ok("Hurray! Get API Success");
        }


        //[HttpPost("CheckPost")]
        //[ValidateModel]
        //[Authorize(Policy = AuthorizationValues.PolicyLoremIpsum)]
        //public IActionResult Post([FromBody] LoremIpsumModel model)
        //{
        //    if (model != null && IsValid(model))
        //    {
        //        return Ok("Hurray! Post API Success");
        //    }
        //    return BadRequest("Something went wrong, check validation rule");
        //}

        //private bool IsValid(LoremIpsumModel model)
        //{
        //    return
        //        !string.IsNullOrWhiteSpace(model.Name) &&
        //        !string.IsNullOrWhiteSpace(model.Email) &&
        //        !string.IsNullOrWhiteSpace(model.Address) &&
        //        !string.IsNullOrWhiteSpace(model.PhoneNumber) &&
        //        !string.IsNullOrWhiteSpace(model.Zip);
        //}

        

        //[HttpPost("UpdateCheck")]
        //public async Task<IActionResult> UpdateContact([FromBody] LoremIpsumModel model)
        //{
        //    try
        //    {
        //        var loremIpsumModel = new LoremIpsumModel()
        //        {
        //            FirstName = model.FirstName,
        //            LastName = model.LastName,
        //            NPINumber = model.NPINumber,
        //            Email = model.Email,
        //            Identifier = model.Identifier,
        //            PhoneNumber = model.PhoneNumber,

        //        };

        //        bool result = await _xConnectService.UpdateContact(model.NPINumber, model.FirstName, model.LastName);

        //        if (result)
        //        {
        //            var response = new Response<LoremIpsumModel>()
        //            {
        //                IsSuccess = true,
        //                Code = EDEPResponseCodes.Success,
        //                Data = loremIpsumModel

        //            };
        //            return Ok(response);
        //        }

        //        else
        //        {
        //            var response = new Response<LoremIpsumModel>()
        //            {
        //                IsSuccess = false,
        //                Code = EDEPResponseCodes.Error,
        //                Data = loremIpsumModel
        //            };
        //            return BadRequest(response);
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        return BadRequest($"Error updating contact: {ex.Message}");
        //    }
        //}

        //[HttpPost("FormData")]
        //[ValidateModel]
        //[Authorize(Policy = AuthorizationValues.PolicyLoremIpsum)]
        //public async Task<IActionResult> SubmitForm([FromBody] FormData formData)
        //{
        //    try
        //    {
        //        // Check if xConnect is available
        //        using (var client = SitecoreXConnectClientConfiguration.GetClient())
        //        {
        //            var contact = GetContact(client);

        //            // Create interaction
        //            var interaction = new Interaction(contact, InteractionInitiator.Brand, "Submit Form");

        //            // Add custom event
        //            var formSubmitEvent = new CustomFormSubmitEvent(formData.Name, formData.PhoneNumber, formData.Email, formData.Address);
        //            interaction.Events.Add(formSubmitEvent);

        //            // Submit the interaction
        //            client.AddInteraction(interaction);
        //            client.Submit();
        //        }

        //        return Ok("Form submitted successfully");
        //    }
        //    catch (XdbExecutionException ex)
        //    {
        //        // Handle xConnect exceptions
        //        return BadRequest($"Error submitting form: {ex.Message}");
        //    }
        //    catch (Exception ex)
        //    {
        //        // Handle other exceptions
        //        return InternalServerError(ex);
        //    }
        //}

    }
}