using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using TechWebApi.Models.DbModels;
using TechWebApi.Models.Repos;

namespace TechWebApi.Controllers
{
    [RoutePrefix("api/Bicycle")]
    public class BicycleController : ApiController
    {

        private readonly BicycleRepos<Bicycle> _repo = new BicycleRepos<Bicycle>();


        //GET: api/Bicycle
        [HttpGet, Route("")]
        public IEnumerable<Bicycle> GetBicycles()
        {
            return _repo.GetAll();
        }


        //GET: api/Bicycle/Avaliables
        [HttpGet, Route("Avaliables")]
        public IEnumerable<Bicycle> GetAvaliablesBicycles() => _repo.GetAvailables();


        //GET: api/Bicycle/Unavaliables
        [HttpGet, Route("Unavaliables")]
        public IEnumerable<Bicycle> GetUnavaliablesBicycles() => _repo.GetUnavailables();


        //GET: api/Bicycle/1
        [HttpGet, Route("{id}", Name ="DisplayRoute")]
        [ResponseType(typeof(Bicycle))]
        public async Task<IHttpActionResult> GetBicycles(int id)
        {
            var bicycle = _repo.GetOne(id);

            if (bicycle == null)
            {
                return NotFound();
            }

            return Ok(bicycle);
        }


        //POST: /api/Bicycle
        [HttpPut, Route("{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdateBicycle(int id, Bicycle bicycle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bicycle.Id)
            {
                return BadRequest();
            }

            try
            {
                _repo.Save(bicycle);
            }
            catch(Exception ex) { throw new Exception("Can't save changes!"); }

            return StatusCode(HttpStatusCode.NoContent);
        }


        //POST: /api/Biycle/1
        [HttpPost, Route("")]
        [ResponseType(typeof(Bicycle))]
        public IHttpActionResult CreateBicycle(Bicycle bicycle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _repo.Add(bicycle);
            }
            catch (Exception ex)
            {
                throw;
            }

            return CreatedAtRoute("DisplayRoute", new { id = bicycle.Id }, bicycle);
        }


        //POST: api/Bicycle/1
        [HttpDelete, Route("{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult DeleteBicycle(int id)
        {
            var toDelete = _repo.GetOne(id);

            if (toDelete == null)
            {
                return BadRequest();
            }

            try
            {
                _repo.Delete(toDelete);
            }
            catch (Exception ex) { throw; }

            return StatusCode(HttpStatusCode.OK);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repo.Dispose();
            }

            base.Dispose(disposing);
        }


    }
}
