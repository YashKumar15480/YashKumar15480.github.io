using Case_Study.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Case_Study.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        Database1Entities db = new Database1Entities();
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Add([Bind(Include ="Id,Name,Password,Email")]CaseStudy c)
        {
            if (ModelState.IsValid)
            {
                db.CaseStudies.Add(c);
                int a = db.SaveChanges();
                if (a > 0)
                {
                    TempData["id"] = "<script>alert('data inserted');</script>";
                }
                else
                {
                    TempData["id"] = "<script>alert('data inserted');</script>";
                }
            }
           return  RedirectToAction("Index","Home");

        }
        public ActionResult Login()
        {
            return View();
        }
        
        [HttpPost]
        public ActionResult Login(CaseStudy c)
        {
          var c1 = db.CaseStudies.Where(model => model.Name == c.Name && model.Password == c.Password).FirstOrDefault();
          if(c1==null)
            {
                TempData["id"] = "<script>alert('Login unsuccessfull');</script>";
                return RedirectToAction("Index", "Home");

            }
          else
            {
                Session["id"] = c.Name.ToString();
                return RedirectToAction("Admin");
            }
        }
        public ActionResult Admin()
        {
            return View();
        }
       
        public ActionResult Delete(int ? Id)
        {
            if(Id==null)
            {
                return HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            else
            {
                CaseStudy c = db.CaseStudies.Find(Id);
                if(c==null)
                {
                    HttpNotFound();
                }
                else
                {
                    return View(c);
                }
            }
            return RedirectToAction("Index");
        }

        private ActionResult HttpStatusCodeResult(HttpStatusCode badRequest)
        {
            throw new NotImplementedException();
        }
        public ActionResult Logout()
        {
            Session.Abandon();
            TempData["id"] = "<script>alert('Login unsuccessfull');</script>";
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {

            CaseStudy c = db.CaseStudies.Find(id);
                db.CaseStudies.Remove(c);
                int a = db.SaveChanges();
                if (a > 0)
                {
                    TempData["id"] = "<script>alert('data deleted');</script>";
                }
                else
                {
                    TempData["id"] = "<script>alert('data not deleted');</script>";
                }
            
          

            return RedirectToAction("Index", "Home");

        }

        public ActionResult details()
        {
            return View(db.CaseStudies.ToList());
        }

        
    }
}