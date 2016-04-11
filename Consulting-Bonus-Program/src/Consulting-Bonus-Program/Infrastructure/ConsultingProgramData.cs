using Microsoft.Data.Entity;
using Web.Repositories;

namespace Web.infrastructure
{
    public class ConsultingProgramData : DbContext
    {
        public DbSet<Employee> employees { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Employee>().HasKey(u => u.Id);
            builder.Entity<Employee>().Property(u => u.FirstName).IsRequired();
            builder.Entity<Employee>().Property(u => u.LastName).IsRequired();
            builder.Entity<Employee>().Ignore(employee => employee.LoyaltyFactor);
        }
    }
}
