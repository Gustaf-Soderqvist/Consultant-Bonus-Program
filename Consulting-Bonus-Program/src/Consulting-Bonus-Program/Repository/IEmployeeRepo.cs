using System;
using System.Collections.Generic;
using Microsoft.AspNet.Mvc;

namespace Web.Repositories
{
    public interface IEmployeeRepository : IDisposable
    {
        List<Employee> GetEmployees();
        Employee GetEmployeeByID(int id);
        void AddEmployee(Employee employee);
        void DeleteEmployee(int id);
        void UpdateEmployee(int id, [FromBody] Employee employee);

    }
}
