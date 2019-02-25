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

// Desestruturação
const { nome, profissao, endereco: {cidade, rua} } = usuario;

console.log(nome, profissao, cidade, rua);


const mostraNomeProfissao = ({nome, profissao}) => {
  console.log(nome, profissao);
}

mostraNomeProfissao(usuario);