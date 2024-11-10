// obtendo os dados do localstorage
const getCadastro = localStorage.getItem('cadastro');
const cadastroObject = JSON.parse(getCadastro);

function novoElemento(labeltxt, chave) {
  // cria os elementos necessarios
  const div = document.createElement('div');
  const label = document.createElement('label');
  const p = document.createElement('p');

  // Adiciona o valor do localstorage nos elementos
  const textoLabel = document.createTextNode(labeltxt);
  const textoP = document.createTextNode(cadastroObject[chave]);

  // adiciona o elemento criado e coloca um valor nele
  p.appendChild(textoP);
  label.appendChild(textoLabel);

  // cria a div com os dados corretos e adiciona uma classe
  div.appendChild(label);
  div.appendChild(p);
  div.classList.add('infoUsuario');

  // insere a nova div antes do elemento com o id 'dados'
  const divAtual = document.querySelector('.container');
  divAtual.appendChild(div);
}

function api(body) {
  // Usando fetch para fazer a requisição PUT
  fetch('http://192.168.1.199:3000/usuario/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Erro ao enviar dados:', error);
    });
}

// adiciona os elementos na pagina
novoElemento('Nome:', 'nome');
novoElemento('Sobrenome:', 'sobrenome');
novoElemento('Email:', 'email');
novoElemento('Idade:', 'idade');

// opcao para quando clicar em voltar e editar os dados
document
  .querySelector('#btnVoltar')
  .addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href = './form.html';
  });

// opcao para salvar os dados no arquivo JSON
document
  .querySelector('#btnEnviar')
  .addEventListener('click', function (event) {
    event.preventDefault();

    alert('Dados cadastrados com sucesso!');
    window.location.href = './index.html';
    // Envia os dados para a API (se necessário)
    api(getCadastro);

    // Limpa o localStorage
    localStorage.clear();
  });
