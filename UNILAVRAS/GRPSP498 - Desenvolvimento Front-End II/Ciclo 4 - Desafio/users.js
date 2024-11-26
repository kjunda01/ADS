async function obterDados() {
    try {
        const response = await fetch("https://dummyjson.com/users"); // URL da API
        if (!response.ok) {
            throw new Error("Erro ao obter os dados");
        }

        const data = await response.json(); // Recebe os dados no formato JSON

        // A chave 'users' contém o array de usuários
        const usuarios = data.users; // Acessa o array de usuários

        // Seleciona o container onde os dados serão exibidos
        const usuariosContainer = document.querySelector(".todosOsUsuarios");

        // Limpa o conteúdo anterior (caso haja algum)
        usuariosContainer.innerHTML = "";

        // Cria uma linha para cada usuário e adiciona ao container
        usuarios.forEach((item) => {
            exibirUsuario(item);
        });
    } catch (error) {
        console.error("Erro:", error);
    }
}

async function adicionarUsuario(usuario) {
    try {
        const response = await fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });

        const data = await response.json();
        console.log("Novo usuário adicionado:", data);

        // Exibe um pop-up de sucesso
        alert("Novo usuário adicionado com sucesso!");

        // Adiciona o novo usuário à lista
        exibirUsuario(data);
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
    }
}

function exibirUsuario(usuario) {
    const usuariosContainer = document.querySelector(".todosOsUsuarios");

    // Cria um item para o usuário
    const divItem = document.createElement("div");
    divItem.classList.add("usuario");

    // Div para exibir o nome e idade
    const nomeIdadeDiv = document.createElement("div");
    nomeIdadeDiv.classList.add("nome-idade");

    // Nome e sobrenome + idade
    const nome = document.createElement("span");
    nome.textContent = `${usuario.firstName} ${usuario.lastName} - ${usuario.age} anos`;
    nomeIdadeDiv.appendChild(nome);

    // Adiciona a div do nome e idade no div principal
    divItem.appendChild(nomeIdadeDiv);

    // Cria e insere a imagem
    const img = document.createElement("img");
    img.src = usuario.image || "https://via.placeholder.com/120"; // Imagem do usuário ou um placeholder
    img.alt = `${usuario.firstName} ${usuario.lastName}`;
    divItem.appendChild(img);

    // Div para exibir o email
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email");

    // Email do usuário
    const email = document.createElement("span");
    email.textContent = `Email: ${usuario.email}`;
    emailDiv.appendChild(email);

    // Adiciona a div do email no div principal
    divItem.appendChild(emailDiv);

    // Adiciona o botão de deletar
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = "🗑️"; // Ícone de lixeira

    // Adiciona o evento de clique no botão de deletar
    deleteBtn.addEventListener("click", () => {
        // Exibe a caixa de confirmação
        const confirmDelete = window.confirm(
            "Tem certeza que deseja excluir este usuário?"
        );
        if (confirmDelete) {
            deletarUsuario(usuario.id, divItem);
        } else {
            console.log("Exclusão cancelada.");
        }
    });

    divItem.appendChild(deleteBtn);

    // Adiciona o item à lista de usuários
    usuariosContainer.appendChild(divItem);
}

async function deletarUsuario(id, divItem) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();

        if (data) {
            // Remove o item do DOM
            divItem.remove();
            console.log(`Usuário com ID ${id} foi deletado.`);
        }
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
    }
}

// Função para validar os campos de entrada
function validarCampos(nome, sobrenome, idade, email, foto) {
    let isValid = true;

    // Limpa as mensagens de erro anteriores
    clearErrors();

    // Validação do nome
    if (!nome || nome.length < 3 || nome.length > 50) {
        showError(".nomeUsuario", "O nome deve ter entre 3 e 50 caracteres.");
        isValid = false;
    }

    // Validação do sobrenome
    if (!sobrenome || sobrenome.length < 3 || sobrenome.length > 50) {
        showError(".sobrenomeUsuario", "O sobrenome deve ter entre 3 e 50 caracteres.");
        isValid = false;
    }

    // Validação do email com expressão regular
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !emailRegex.test(email)) {
        showError(".emailUsuario", "Por favor, insira um email válido.");
        isValid = false;
    }

    // Validação da idade
    if (!idade || isNaN(idade) || idade <= 0 || idade >= 120) {
        showError(".idadeUsuario", "A idade deve ser um número positivo e menor que 120.");
        isValid = false;
    }

    // Validação da foto (se for fornecida, precisa ser uma URL válida)
    if (foto && !isValidURL(foto)) {
        showError(".fotoUsuario", "A URL da foto fornecida não é válida.");
        isValid = false;
    }

    // Se todas as validações passarem
    return isValid;
}

// Função para mostrar uma mensagem de erro abaixo do campo
function showError(selector, message) {
    const field = document.querySelector(selector);
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    field.parentElement.appendChild(error);
}

// Função para limpar as mensagens de erro
function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => error.remove());
}

// Função para verificar se uma URL é válida
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

// Evento de submissão do formulário
document.querySelector(".formNovoUsuario").addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector(".nomeUsuario").value;
    const sobrenome = document.querySelector(".sobrenomeUsuario").value;
    const idade = document.querySelector(".idadeUsuario").value;
    const email = document.querySelector(".emailUsuario").value;
    const foto = document.querySelector(".fotoUsuario").value;

    // Valida os campos
    if (!validarCampos(nome, sobrenome, idade, email, foto)) {
        return; // Se algum campo for inválido, não prossegue
    }

    // Cria o novo usuário
    const novoUsuario = {
        firstName: nome,
        lastName: sobrenome,
        age: idade,
        email: email,
        image: foto || "https://via.placeholder.com/100", // Foto padrão se não for fornecida
    };

    // Chama a função para adicionar o novo usuário
    adicionarUsuario(novoUsuario);

    // Limpa os campos do formulário
    document.querySelector(".formNovoUsuario").reset();
});

// Chamando a função para exibir os usuários
obterDados();
