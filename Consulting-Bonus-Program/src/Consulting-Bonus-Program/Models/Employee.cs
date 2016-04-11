using System;
using System.ComponentModel.DataAnnotations;


namespace Web.Repositories
{
    public class Employee
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "First name is Required.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is Required.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Date of employment is Required.")]
        [DataType(DataType.Date)]
        public DateTime DateOfEmployment {get; set; }

        public double LoyaltyFactor
        {
            get
            {
                DateTime now = DateTime.Now;

                if (now >= DateOfEmployment.AddYears(5))
                {
                    return 1.5;
                }

                if (now >= DateOfEmployment.AddYears(4))
                {
                    return 1.4;
                }

                if (now >= DateOfEmployment.AddYears(3))
                {
                    return 1.3;
                }

                if (now >= DateOfEmployment.AddYears(2))
                {
                    return 1.2;
                }

                if (now >= DateOfEmployment.AddYears(1))
                {
                    return 1.1;
                }

                return 1;
            }
            set{}
        }
    }
}
