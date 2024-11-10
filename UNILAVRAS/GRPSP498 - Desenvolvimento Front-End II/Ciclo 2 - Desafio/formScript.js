import cadastro, {
  verificarEmail,
  verificarIdade,
  verificarNome,
  verificarSobrenome,
} from './formVerificacao.js';

// Selecionando os campos
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const email = document.querySelector('#email');
const idade = document.querySelector('#idade');

// Função de registro (ao clicar no botão registrar)
document
  .querySelector('.btnRegistrar')
  .addEventListener('click', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    if (
      verificarNome() &&
      verificarSobrenome() &&
      verificarEmail() &&
      verificarIdade()
    ) {
      localStorage.setItem('cadastro', JSON.stringify(cadastro));

      window.location.href = './confirmation.html';
    }
  });

// Função de editar dados (ao clicar no botão voltar)
document.addEventListener('DOMContentLoaded', function () {
  // Recupera os dados do localStorage
  const getCadastro = localStorage.getItem('cadastro');
  const cadastroObject = JSON.parse(getCadastro);

  if (cadastroObject) {
    // Preenche os campos com os dados do localStorage
    nome.value = cadastroObject.nome || '';
    sobrenome.value = cadastroObject.sobrenome || '';
    email.value = cadastroObject.email || '';
    idade.value = cadastroObject.idade || '';
  }
});
