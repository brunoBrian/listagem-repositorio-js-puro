const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);


const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

//  Muda somente o nome e copia o objeto
 const usuario2 = {...usuario, nome:'Gabriel' };

//  Muda somente a cidade e copia o objeto
 const usuario3 = {...usuario, endereco: { ...usuario.endereco, cidade: "Lontras" } };

 console.log(usuario2)
 console.log(usuario3)