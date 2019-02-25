import api from '../api';

class RepoSearch {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-user-form');
    this.inputEl = document.querySelector('.repo-user-input');
    this.buttonEl = document.querySelector('.repo-user-button');
    this.ulEl = document.querySelector('.repo-user-ul');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }
  
  getIdRepositoryToExclude() {
    const removeRepo = document.querySelectorAll('.repo-remove');

    if(removeRepo)
      for (let i = 0; i < removeRepo.length; i++) {
        removeRepo[i].onclick = (event, ii) => {
          let idRepo = removeRepo[i].parentElement.parentElement.getAttribute('id');
          this.removeRepository(Number(idRepo));
        };
      }
  }

  removeRepository(id) {
    let newRepositoryArray = this.repositories[0];

    newRepositoryArray = newRepositoryArray.filter(repo => repo.id !== id);

    this.repositories.pop();
    this.repositories.push(newRepositoryArray);
    this.render();
  }

  setLoading(loading = true) {
    if (loading) {
      const loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando...'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const user = this.inputEl.value;

    if(user.length === 0)
      return;

    this.setLoading();

    try {
      const response = await api.get(`/users/${user}/repos`);

      this.repositories.push(response.data);
    }catch(error) {
      alert('Usuário não encontrado');
    }

    this.setLoading(false);
    this.ulEl.innerHTML = '';
    this.render();
  }

  render() {
    const repositories = this.repositories[0];

    this.ulEl.innerHTML = '';

    repositories.map(repo => {
      const { name, description, html_url, owner: {avatar_url}, id } = repo;

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', avatar_url);
      imgEl.setAttribute('class', 'img-perfil');

      let titleEl = document.createElement('h2');
      titleEl.appendChild(document.createTextNode(name));
      titleEl.setAttribute('class', 'title');

      let descriptionEL = document.createElement('p');
      descriptionEL.appendChild(document.createTextNode(description));
      descriptionEL.setAttribute('class', 'description');

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', html_url);
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('class', 'link');
      linkEl.appendChild(document.createTextNode('Veja mais'));

      let removeEl = document.createElement('span');
      removeEl.appendChild(document.createTextNode('Remover'));
      removeEl.setAttribute('class', 'repo-remove');

      let divEl = document.createElement('div');
      divEl.setAttribute('class', 'texts-data-user');
      divEl.appendChild(titleEl);
      divEl.appendChild(descriptionEL);
      divEl.appendChild(linkEl);
      divEl.appendChild(removeEl);
      
      let liEl = document.createElement('li');
      liEl.setAttribute('class', 'repo-list');
      liEl.setAttribute('id', id);
      liEl.appendChild(imgEl);
      liEl.appendChild(divEl);

      this.ulEl.appendChild(liEl);
    });
    
    this.getIdRepositoryToExclude();
  }
}

export default RepoSearch;