const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const map = usuarios.map(user => user.idade);
console.log(map);

const filter = usuarios.filter(user => user.empresa === 'Rocketseat' && user.idade > 18);
console.log(filter);

const find = usuarios.find(user => user.empresa === 'Google');
console.log(find);

let result = 0;
const mult = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(user => user.idade < 50);
console.log(mult);