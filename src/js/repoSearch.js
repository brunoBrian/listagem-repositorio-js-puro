import api from '../api';

class RepoSearch {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.ulEl = document.querySelector('.repo-ul');
    this.inputEl = document.querySelector('.input-search');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando...'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const inputRepo = this.inputEl.value;

    if (inputRepo.length === 0)
      return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${inputRepo}`);
      const { name, description, owner: { avatar_url } , html_url} = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });
      
      this.render();
    }catch(error) {
      alert('O repositório não existe');
    }
    
    this.setLoading(false);
    this.inputEl.value = '';
  }

  render() {
    this.ulEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);
      imgEl.setAttribute('class', 'img-perfil');

      let titleEl = document.createElement('h2');
      titleEl.appendChild(document.createTextNode(repo.name));
      titleEl.setAttribute('class', 'title');

      let descriptionEL = document.createElement('p');
      descriptionEL.appendChild(document.createTextNode(repo.description));
      descriptionEL.setAttribute('class', 'description');

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('class', 'link');
      linkEl.appendChild(document.createTextNode('Veja mais'));

      let divEl = document.createElement('div');
      divEl.setAttribute('class', 'texts-data-user');
      divEl.appendChild(titleEl);
      divEl.appendChild(descriptionEL);
      divEl.appendChild(linkEl);
      
      let liEl = document.createElement('li');
      liEl.setAttribute('class', 'repo-list');
      liEl.appendChild(imgEl);
      liEl.appendChild(divEl);

      this.ulEl.appendChild(liEl);
    });
  }
}

export default RepoSearch;