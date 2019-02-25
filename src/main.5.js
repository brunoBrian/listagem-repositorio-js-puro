// REST OPERATOR
const usuario = {
  nome: 'Bruno Brian',
  idade: 24,
  profissao: 'Analista de Sistemas',
  endereco: {
    rua: 'Uruguai',
    numero: 141,
    cidade: 'Mauá'
  }
}
const arr = [4,5,6,7,8,9];
const { nome, idade, ...resto } = usuario;
console.log(nome, idade, resto);

const [ a, b, ...c ] = arr;
console.log(a, b, c);

const soma = (...params) => {
  return params.reduce((total, next) => total + next);
}
console.log(soma(2,5,6,8));

const div = (a, b, ...params) => {
  return params;
}
console.log(div(2,5,6,8,5,3));



// SPREAD OPERATOR - Unir dois arrays
const arr1 = [1,2,3,4];
const arr2 = [4,5,6,7];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario2 = {
  nome: 'Bruno Brian',
  idade: 24,
  profissao: 'Analista de Sistemas',
  endereco: {
    rua: 'Uruguai',
    numero: 141,
    cidade: 'Mauá'
  }
}

const user = {...usuario2, nome: 'Francielly', endereco: {cidade: 'América do Sul'}}
console.log(user);