using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.Entity;
using Web.Repositories;
using System;

namespace Web.infrastructure
{
    public class SampleDataInitializer
    {
        private readonly ConsultingProgramData data;

        public SampleDataInitializer(ConsultingProgramData data)
        {
            this.data = data;
        }

        //Create users
        public void CreateEmployee()
        {
            data.Database.Migrate();

            if (data.employees.Any())
            {
                return;
            }

            data.employees.AddRange(new List<Employee>
            {
                new Employee { FirstName = "Tyrande", LastName="Whisperwind", DateOfEmployment = new DateTime(2016,1,1), },
                new Employee { FirstName = "Illidan", LastName="Stormrage", DateOfEmployment = new DateTime(2015,1,1) },
                new Employee { FirstName = "Legolas", LastName="Greenleaf", DateOfEmployment = new DateTime(2014,1,1) },
                new Employee { FirstName = "Tom", LastName="Bombadil", DateOfEmployment = new DateTime(2013,1,1) },
                new Employee { FirstName = "Grìma", LastName="Wormtongue", DateOfEmployment = new DateTime(2012,1,1) },
            });

            data.SaveChanges();
        }
    }
}
