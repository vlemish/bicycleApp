namespace TechWebApi.Migrations
{
    using System.Data.Entity.Migrations;
    using TechWebApi.Models.DbModels;

    internal sealed class Configuration : DbMigrationsConfiguration<TechWebApi.Models.EF.BicycleContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TechWebApi.Models.EF.BicycleContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

        }
    }
}
