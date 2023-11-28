using System;
using System.ComponentModel.DataAnnotations;


namespace EDEP.Api.LoremIpsum.Models

{
    public class LoremIpsumModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        public string NPINumber { get; set; }

        [Required]
        [RegularExpression(@"^\+?\d{10}$", ErrorMessage = "Invalid phone number")]
        public string PhoneNumber { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Invalid email address")]
        public string Email { get; set; }
        [Required]
        public string Identifier { get; set; }
    }
}
