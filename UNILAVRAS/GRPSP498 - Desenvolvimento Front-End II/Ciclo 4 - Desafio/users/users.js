async function obterDados() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
            throw new Error("Erro ao obter os dados");
        }
        const data = await response.json();
        const usuarios = data.users;
        const usuariosContainer = document.querySelector(".todosOsUsuarios");
        usuariosContainer.innerHTML = "";
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

        alert("Novo usuário adicionado com sucesso!");

        exibirUsuario(data);
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
    }
}

function exibirUsuario(usuario) {
    const usuariosContainer = document.querySelector(".todosOsUsuarios");

    const divItem = document.createElement("div");
    divItem.classList.add("usuario");

    const nomeIdadeDiv = document.createElement("div");
    nomeIdadeDiv.classList.add("nome-idade");

    const nome = document.createElement("span");
    nome.textContent = `${usuario.firstName} ${usuario.lastName} - ${usuario.age} anos`;
    nomeIdadeDiv.appendChild(nome);

    divItem.appendChild(nomeIdadeDiv);

    const img = document.createElement("img");
    img.src = usuario.image || "https://via.placeholder.com/120"; // Imagem do usuário ou um placeholder
    img.alt = `${usuario.firstName} ${usuario.lastName}`;
    divItem.appendChild(img);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email");

    const email = document.createElement("span");
    email.textContent = `Email: ${usuario.email}`;
    emailDiv.appendChild(email);

    divItem.appendChild(emailDiv);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = "🗑️";

    deleteBtn.addEventListener("click", () => {
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

    usuariosContainer.appendChild(divItem);
}

async function deletarUsuario(id, divItem) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();

        if (data) {
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
        showError(
            ".sobrenomeUsuario",
            "O sobrenome deve ter entre 3 e 50 caracteres."
        );
        isValid = false;
    }

    // Validação do email com expressão regular
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !emailRegex.test(email)) {
        showError(".emailUsuario", "Por favor, insira um email válido.");
        isValid = false;
    }

    // Validação da idade
    if (!idade || isNaN(idade) || idade <= 0 || idade >= 120) {
        showError(
            ".idadeUsuario",
            "A idade deve ser um número positivo e menor que 120."
        );
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

function showError(selector, message) {
    const field = document.querySelector(selector);
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => error.remove());
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

document
    .querySelector(".formNovoUsuario")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.querySelector(".nomeUsuario").value;
        const sobrenome = document.querySelector(".sobrenomeUsuario").value;
        const idade = document.querySelector(".idadeUsuario").value;
        const email = document.querySelector(".emailUsuario").value;
        const foto = document.querySelector(".fotoUsuario").value;

        if (!validarCampos(nome, sobrenome, idade, email, foto)) {
            return;
        }

        const novoUsuario = {
            firstName: nome,
            lastName: sobrenome,
            age: idade,
            email: email,
            image: foto || "https://via.placeholder.com/100",
        };

        adicionarUsuario(novoUsuario);

        document.querySelector(".formNovoUsuario").reset();
    });

obterDados();
