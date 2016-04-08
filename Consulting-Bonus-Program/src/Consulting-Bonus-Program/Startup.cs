using System.Linq;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc.Formatters;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Web.infrastructure;
using Web.Repositories;

namespace Consulting_Bonus_Program
{
    public class Startup
    {
        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);

        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(appEnv.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            // Add Entity Framework services to the services container.
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<ConsultingProgramData>(options =>
                 options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));


            // Add MVC services to the services container.
            services.AddMvc(options =>
            {
                int position = options.OutputFormatters.ToList().FindIndex(f => f is JsonOutputFormatter);

                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };

                var formatter = new JsonOutputFormatter { SerializerSettings = settings };

                options.OutputFormatters.Insert(position, formatter);
            });

            services.AddScoped<IEmployeeRepository, EmployeeRepo>();

            services.AddTransient<SampleDataInitializer>();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SampleDataInitializer initializer)
        {
            loggerFactory.MinimumLevel = LogLevel.Information;
            loggerFactory.AddConsole();

            // Configure the HTTP request pipeline.
            // Add the following to the request pipeline only in development environment.
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage(options => options.ShowExceptionDetails = true);
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // Add static files to the request pipeline.
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc();
            //Add sample Data
            initializer.CreateEmployee();
        }
    }
}

