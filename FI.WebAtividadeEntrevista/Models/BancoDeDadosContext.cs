using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebAtividadeEntrevista.Models
{
    public class BancoDeDadosContext : DbContext
    {
        public BancoDeDadosContext() : base("BancoDeDados")
        {
            
        }

        public DbSet<ClienteModel> Clientes { get; set;}
    }
}