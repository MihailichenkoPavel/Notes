using Notes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notes.DAL
{
    public class NoteRepository : INoteRepository
    {
        private readonly NoteContext _context;

        public NoteRepository(NoteContext context)
        {
            _context = context;
        }

        public IEnumerable<Note> GetAll()
        {
            return _context.Notes;
        }

        public Note GetById(int id)
        {
            return _context.Notes.Find(id);
        }

        public Note Add(Note item)
        {
            if (item == null)
                throw new ArgumentNullException("item");
            _context.Notes.Add(item);
            _context.SaveChanges();
            return item;
        }

        public void Delete(int id)
        {
            var item = _context.Notes.Find(id);
            if (item == null)
                throw new ArgumentNullException("item");
            _context.Notes.Remove(item);
            _context.SaveChanges();
        }

        public void Update(Note item)
        {
            if (item == null)
                throw new ArgumentNullException("item");
            var objItem = _context.Notes.Find(item.Id);
            if (objItem != null)
            {
                objItem.Name = item.Name;
                objItem.Text = item.Text;
            }
            _context.SaveChanges();
        }
    }
}
