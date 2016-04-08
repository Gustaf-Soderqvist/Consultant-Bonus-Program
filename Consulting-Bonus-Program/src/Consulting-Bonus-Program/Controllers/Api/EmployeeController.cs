using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Web.Repositories;
using Web.infrastructure;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository EmployeeRepo;

        public EmployeeController(IEmployeeRepository employeeRepo)
        {
            EmployeeRepo = employeeRepo;
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return EmployeeRepo.GetEmployees();
        }

        // GET: /Employee/{id}
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return EmployeeRepo.GetEmployeeByID(id);
        }

        //POST
        [HttpPost]
        public void Post(int id, [FromBody] Employee value)
        {
             EmployeeRepo.AddEmployee(value);
        }

        //PUT
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Employee value)
        {
            EmployeeRepo.UpdateEmployee(id, value);
        }

        //DELETE
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            EmployeeRepo.DeleteEmployee(id);
        }
  
        protected override void Dispose(bool disposing)
        {
            EmployeeRepo.Dispose();
            base.Dispose(disposing);
        }
    }
}
