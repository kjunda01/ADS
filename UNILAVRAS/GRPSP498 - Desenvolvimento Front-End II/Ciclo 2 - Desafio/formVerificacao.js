// Selecionando os campos
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const email = document.querySelector('#email');
const idade = document.querySelector('#idade');

// Inicia o JSON de cadastro
let cadastro = {};
const novoCadastro = (chave, valor) => {
  cadastro[chave] = valor;
};

export const verificarNome = () => {
  if (nome.value.trim()) {
    if (nome.value.length >= 3 && nome.value.length <= 50) {
      removerErro(nome);
      novoCadastro('nome', nome.value);
      return true;
    } else {
      entradaInvalida('Campo nome deve ter entre 3 e 50 caracteres!', nome);
    }
  } else {
    entradaInvalida('Campo nome não pode estar em branco!', nome);
  }
};

export const verificarSobrenome = () => {
  if (sobrenome.value.trim()) {
    if (sobrenome.value.length >= 3 && sobrenome.value.length <= 50) {
      removerErro(sobrenome);
      novoCadastro('sobrenome', sobrenome.value);
      return true;
    } else {
      entradaInvalida(
        'Campo sobrenome deve ter entre 3 e 50 caracteres!',
        sobrenome,
      );
    }
  } else {
    entradaInvalida('Campo sobrenome não pode estar em branco!', sobrenome);
  }
};

export const verificarEmail = () => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validar = email.value.match(regex);

  if (!validar) {
    entradaInvalida('Email inválido!', email);
  } else {
    removerErro(email);
    novoCadastro('email', email.value);
    return true;
  }
};

export const verificarIdade = () => {
  const anosDeVida = parseInt(idade.value);

  if (anosDeVida >= 0 && anosDeVida <= 120) {
    removerErro(idade);
    novoCadastro('idade', anosDeVida);
    return true;
  } else {
    if (anosDeVida) {
      entradaInvalida('A pessoa deve ter entre 0 e 120 anos.', idade);
    } else {
      entradaInvalida('Idade inválida!', idade);
    }
  }
};

// Função que exibe a mensagem de erro
export function entradaInvalida(mensagem, elementoPai) {
  // Verifica se já existe uma mensagem de erro e a remove, se necessário
  removerErro(elementoPai);

  const p = document.createElement('p');
  const texto = document.createTextNode(mensagem);
  p.appendChild(texto);
  p.classList.add('error');
  elementoPai.parentElement.appendChild(p);
}

// Função para remover erro (caso o campo esteja correto)
export function removerErro(elementoPai) {
  const erroExistente = elementoPai.parentElement.querySelector('.error');
  if (erroExistente) {
    erroExistente.remove();
  }
}

export default cadastro;
