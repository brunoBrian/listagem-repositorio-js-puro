const array = [2, 44, 3, 5, 6, 8, 11, 14, 17];

// Percorre todo o array e retorna cada item * 2
const newArr = array.map(item => {
  return item * 2;
});

console.log(newArr);

// Pega o primeiro parametro (total) e atribui 2 e o next 3, depois faz a soma e guarda o 5 na var total, entao soma novamente com o proximo valor, que é o 5 e assim sucessivamente
const sum = array.reduce((total, next) => {
  return total + next;
});

console.log(sum);

// Verifica se o resultado da query se encontra no filtro e devolve um array com os novos valores
const filter = array.filter(item => {
  return item % 2 === 0;
});

console.log(filter);

// Verifica se o valor passado conten no array e o devolve
const find = array.find(item => {
  return item === 44;
});

console.log(find);