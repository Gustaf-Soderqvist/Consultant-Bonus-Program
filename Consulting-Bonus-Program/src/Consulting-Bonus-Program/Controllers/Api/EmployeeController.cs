using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Web.Repositories;

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
        public IActionResult Get(int id)
        {
            var employee = EmployeeRepo.GetEmployeeByID(id);
            if (employee == null)
            {
                return new HttpNotFoundResult();
            }
            else
            {
                return new ObjectResult(employee);
            }
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
