// import axios from 'axios';

// class Api {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(`http://api.github.com/users/${username}`);
//       console.log(response);
//     } catch(error) {
//       console.warn('Erro na Api', error);
//     }
//   }
// }

// Api.getUserInfo('brunoBrian');
// Api.getUserInfo('bruhnoBrian');


// Exercicio 1 - Transformar a classe abaixo em async await
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
//  function umPorSegundo() {
//    delay().then(() => {
//    console.log('1s');
//      delay().then(() => {
//      console.log('2s');
//        delay().then(() => {
//        console.log('3s');
//      });
//    })
//  });
// }
// umPorSegundo();

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log('1s');
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
} 

umPorSegundo();


// Exercicio 2 - Transformar a classe abaixo em async await
// function getUserFromGithub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.log('Usuário não existe');
//   })
//  }
//  getUserFromGithub('diego3g');
//  getUserFromGithub('diego3g124123');

import axios from 'axios';

const getUserFromGithub = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response);
  }catch(error) {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


// Exercicio 3 - Transformar a classe abaixo em async await
// class Github {
//   static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Repositório não existe');
//     })
//   }
//  }
 
//  Github.getRepositories('rocketseat/rocketseat.com.br');
//  Github.getRepositories('rocketseat/dslkvmskv');

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response);
    }catch (error) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('brunoBrian/tweets-real-time-react-native');
Github.getRepositories('rocketseat/dslkvmskv');



// Exercicio 4 - transformar função abaixo em async await
// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//   console.log(response.data);
//   })
//   .catch(err => {
//   console.log('Usuário não existe');
//   });
//  }
//  buscaUsuario('diego3g');

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`)
    console.warn(response.data);
  } catch(error) {
    console.log('Usuário não existe');
  }
}

buscaUsuario('diego3g');