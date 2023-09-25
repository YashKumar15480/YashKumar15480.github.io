using DMS.Foundation.Extension.Models;
using Sitecore.XA.Foundation.Mvc.Models;
using Sitecore.Data.Fields;
using System.Collections.Generic;



namespace DMS.Feature.Content.Models.StudentProfile
{
    public class StudentProfileModel : RenderingModelBase
    {
        public string StudentName { get; set; }
        public string StudentProfile { get; set; }
        public List<string> Subjects { get; set; }
        public LinkField LinkedInLink { get; set; }
        public MediaProperty StudentImageDesktop { get; set; }
        public MediaProperty StudentImageMobile { get; set; }
        public string SubjectNames { get; set; }
    }
}