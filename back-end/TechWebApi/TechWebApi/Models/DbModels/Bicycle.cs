using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TechWebApi.Models.DbModels.Enums;

namespace TechWebApi.Models.DbModels
{

    [Table("Bicycles")]
    public class Bicycle
    {

        [Key]
        public int Id { get; set; }

        [Required, MaxLength(30)]
        public string Name { get; set; }

        public BicycleTypeEnum Type { get; set; }

        public double Price { get; set; }

        public bool IsRented { get; set; }


    }
}