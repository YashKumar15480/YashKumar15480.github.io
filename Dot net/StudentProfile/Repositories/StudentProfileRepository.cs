using Sitecore.XA.Foundation.Mvc.Repositories.Base;
using DMS.Feature.Content.Models.StudentProfile;
using DMS.Foundation.DependencyInjection;
using System.Diagnostics.CodeAnalysis;
using System;
using Sitecore.Data.Fields;
using DMS.Foundation.Extension.Helper;
using System.Linq;
using System.Collections.Generic;

namespace DMS.Feature.Content.Repositories.StudentProfile
{
    [Service(typeof(IStudentProfileRepository))]
    public class StudentProfileRepository : ModelRepository, IStudentProfileRepository
    {
        public override IRenderingModelBase GetModel()
        {
            var model = new StudentProfileModel();
            FillBaseProperties(model);
            FillExtraProperties(model);
            return model;
        }
        public StudentProfileModel FillExtraProperties(StudentProfileModel model)
        {
            try
            {
                var item = model.DataSourceItem;
                if (item != null)
                {
                    model.StudentName = item.Fields[Constants.StudentProfileConstants.StudentNameField]?.Value ?? string.Empty;
                    model.StudentProfile = item.Fields[Constants.StudentProfileConstants.StudentProfileField]?.Value ?? string.Empty;
                    model.SubjectNames = item.Fields[Constants.StudentProfileConstants.SubjectsField]?.Value ?? string.Empty;

                    var subjectsField = item.Fields[Constants.StudentProfileConstants.SubjectsField];

                    if (subjectsField != null)
                    {
                        var subjects = new List<string>();
                        if (subjectsField.Type == "Multilist" || subjectsField.Type == "Multilist with Search")
                        {
                            var multilistField = (MultilistField)subjectsField;
                            subjects.AddRange(multilistField.TargetIDs.Select(targetID =>
                            {
                                var targetItem = Sitecore.Context.Database.GetItem(targetID);
                                return targetItem?.Fields["SubjectName"]?.Value;
                            }).Where(subjectName => !string.IsNullOrEmpty(subjectName)));
                        }

                        model.Subjects = subjects;
                    }
                    else
                    {
                        model.Subjects = new List<string>();
                    }

                    var deskImgField = item.Fields[Constants.StudentProfileConstants.StudentImageDesktopField];
                    model.StudentImageDesktop = deskImgField != null ? ItemHelper.GetMediaProperty(deskImgField) : null;

                    var mobImgField = item.Fields[Constants.StudentProfileConstants.StudentImageMobileField];
                    model.StudentImageMobile = mobImgField != null ? ItemHelper.GetMediaProperty(mobImgField) : null;

                    model.LinkedInLink = item.Fields[Constants.StudentProfileConstants.LinkedInLinkField];
                }
            }
            catch (Exception ex)
            {
                Sitecore.Diagnostics.Log.Error("Error occurred in StudentProfile Repository", ex, this);
            }
            return model;
        }
    }
}
