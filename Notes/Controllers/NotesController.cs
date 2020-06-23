using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Notes.DAL;
using Notes.Models;

namespace Notes.Controllers
{
    [Route("api/notes")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NoteContext _context;
        private readonly INoteRepository _noteRepository;

        public NotesController(NoteContext context)
        {
            _context = context;
            _noteRepository = new NoteRepository(_context);
        }

        [HttpGet]
        [Route("all")]
        public IEnumerable<Note> All()
        {
            return _noteRepository.GetAll();
        }

        [HttpGet]
        [Route("get/{id}")]
        public Note Get(int id)
        {
            return _noteRepository.GetById(id);
        }

        [HttpPost]
        [Route("create")]
        public Note Create(Note item)
        {
            return _noteRepository.Add(item);
        }

        [HttpPut]
        [Route("update")]
        public void Update(Note transaction)
        {
            _noteRepository.Update(transaction);
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public void Delete(int id)
        {
            _noteRepository.Delete(id);
        }
    }
}
