using Microsoft.AspNetCore.Mvc;

namespace EDEP.Api.LoremIpsum.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return Content("Loremipsum EDEPWebservice. Welcome!");
        }
    }
}
