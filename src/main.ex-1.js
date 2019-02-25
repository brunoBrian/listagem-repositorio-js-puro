class Usuario {
  constructor() {
    this.email = '';
    this.senha = '';
  }

  isAdmin() {
    if (this.admin) {
      return 'É um Administrador';
    } else {
      return 'Não é um Administrador';
    }
  }
}

class Admin extends Usuario {
  constructor() {
    super();

    this.admin = true;
  }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin())
console.log(Adm1.isAdmin())