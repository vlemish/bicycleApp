using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using TechWebApi.Models.DbModels;
using TechWebApi.Models.EF;
using System.Data.Entity.Infrastructure;


namespace TechWebApi.Models.Repos
{
    public class BicycleRepos<T> : IDisposable, IRepo<T> where T : Bicycle
    {
        private readonly DbSet<T> _table;

        private readonly BicycleContext _db;


        public BicycleRepos()
        {
            _db = new BicycleContext();
            _table = _db.Set<T>();
        }


        public void Dispose()
        {
            _db?.Dispose();
        }

        public int Add(T entity)
        {

            _table.Add(entity);
            return SaveChanges();
        }

        public int AddRange(IList<T> entities)
        {

            _table.AddRange(entities);
            return SaveChanges();
        }

        public int Delete(T entity)
        {
            _db.Entry(entity).State = EntityState.Deleted;
            return SaveChanges();
        }

        public List<T> ExecuteQuery(string sql) => _table.SqlQuery(sql).ToList();

        public List<T> ExecuteQuery(string sql, object[] sqlParametersObjects) => _table.SqlQuery(sql, sqlParametersObjects).ToList();

        public virtual List<T> GetAll() => _table.ToList();

        public T GetOne(int? d) => _table.Find(d);

        public List<T> GetAvailables() => _table.Where(b => !b.IsRented).ToList();

        public List<T> GetUnavailables() => _table.Where(b => b.IsRented).ToList();

        public int Save(T entity)
        {

            _db.Entry(entity).State = EntityState.Modified;
            return SaveChanges();
        }
        internal int SaveChanges()
        {
            try
            {
                return _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex) { throw; }

            catch (DbUpdateException ex) { throw; }

            catch (CommitFailedException ex) { throw; }

            catch (Exception ex) { throw; }

        }

    }
}