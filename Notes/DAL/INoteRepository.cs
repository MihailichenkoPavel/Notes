using Notes.Models;
using System.Collections.Generic;

namespace Notes.DAL
{
    public interface INoteRepository
    {
        IEnumerable<Note> GetAll();
        Note GetById(int id);
        Note Add(Note item);
        void Delete(int id);
        void Update(Note item);
    }
}
