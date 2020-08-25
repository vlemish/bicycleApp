namespace TechWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RebuildedEnum : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Bicycles", "Name", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("dbo.Bicycles", "Type", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Bicycles", "Type", c => c.Int(nullable: false));
            AlterColumn("dbo.Bicycles", "Name", c => c.String());
        }
    }
}
