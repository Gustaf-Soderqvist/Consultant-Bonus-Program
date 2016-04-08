using System;
using System.Collections.Generic;
using System.Linq;
using Web.infrastructure;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Mvc;

namespace Web.Repositories
{
    public class EmployeeRepo : IEmployeeRepository, IDisposable
    {
        private readonly ConsultingProgramData _context;


        public EmployeeRepo(ConsultingProgramData db)
        {
            _context = db;
        }

        public List<Employee> GetEmployees()
        {
            return _context.employees.ToList();
        }

        public Employee GetEmployeeByID(int id)
        {
            return _context.employees.FirstOrDefault(t => t.Id == id);
        }

        public void AddEmployee( Employee employee)
        {
            if (employee.Id == 0)
            {
                _context.employees.Add(employee);
            }
            else
            {
                _context.employees.Update(employee);
            }

            _context.SaveChanges();
        }

        public void UpdateEmployee(int id, [FromBody] Employee employee)
        {
            _context.employees.Update(employee);
            _context.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            Employee employee =  _context.employees.FirstOrDefault(t => t.Id == id);
            _context.employees.Remove(employee);
            _context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}