using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Repositories
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfEmployment { get; set; }

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
