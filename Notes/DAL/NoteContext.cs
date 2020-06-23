using Microsoft.EntityFrameworkCore;
using Notes.Models;

namespace Notes.DAL
{
    public class NoteContext : DbContext
    {
        public NoteContext(DbContextOptions<NoteContext> options) : base(options)
        {
        }

        public DbSet<Note> Notes { get; set; }
    }
}
