using System.Data.Entity;
using TechWebApi.Models.DbModels;

namespace TechWebApi.Models.EF
{
    public class BicycleContext:DbContext
    {
        public BicycleContext()
            :base("BicycleDbConnection")
        {

        }

        public DbSet<Bicycle> Bicycles { get; set; }


    }
}