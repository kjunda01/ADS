const usuario = document.querySelector("#usuario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmacaoSenha = document.querySelector("#confirmacao-senha");
const form = document.querySelector("#registro");
const toggleSenha = document.querySelector("#toggleSenha");
const toggleConfirmacaoSenha = document.querySelector(
    "#toggleConfirmacaoSenha"
);

//Mostra mensagem de erro
const showsError = (input, message) => {
    // Obtem o elemento campo-formulario
    const formField = input.parentElement;
    // Adiciona a class de erro
    formField.classList.remove("success");
    formField.classList.add("error");
    // Mostra a mensagem de erro
    const error = formField.querySelector("small");
    error.textContent = message;
};

//Mostra mensagem de sucesso
const showsSuccess = (input) => {
    // Obtem o elemento do campo-formulario
    const formField = input.parentElement;
    // Remove a class de erro
    formField.classList.remove("error");
    formField.classList.add("success");
    // Oculta a mensagem de erro
    const error = formField.querySelector("small");
    error.textContent = "";
};

// Checa entrada obrigatória
const isRequired = (value) => (value === "" ? false : true);
// Checa tamanho da entrada
const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;
// Checa se e-mail é válido
const isEmailValid = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Checa se senha é segura
const isPasswordSecure = (senha) => {
    const re = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(senha);
};

// Valida o campo do usuario
const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;
    const usuarioVal = usuario.value.trim();
    if (!isRequired(usuarioVal)) {
        showsError(usuario, "Usuário não pode ficar em branco.");
    } else if (!isBetween(usuarioVal.length, min, max)) {
        showsError(
            usuario,
            `Usuário deve ter entre ${min} e ${max} caracteres.`
        );
    } else {
        showsSuccess(usuario);
        valid = true;
    }
    return valid;
};

// Valida o campo de e-mail
const checkEmail = () => {
    let valid = false;
    const emailVal = email.value.trim();
    if (!isRequired(emailVal)) {
        showsError(email, "E-mail não pode ficar em branco.");
    } else if (!isEmailValid(emailVal)) {
        showsError(email, "E-mail inválido.");
    } else {
        showsSuccess(email);
        valid = true;
    }
    return valid;
};
// Valida a senha
const checkPassword = () => {
    let valid = false;
    const senhaVal = senha.value.trim();
    if (!isRequired(senhaVal)) {
        showsError(senha, "Senha não pode ficar em branco.");
    } else if (!isPasswordSecure(senhaVal)) {
        showsError(
            senha,
            "Senha tem que ter no mínimo 8 caracteres que incluem pelo menos 1 caractere minúsculo, 1 caractere maiúsculo, 1 número, and 1 caractere especial (!@#$%^&*)"
        );
    } else {
        showsSuccess(senha);
        valid = true;
    }
    return valid;
};

toggleSenha.addEventListener("click", function () {
    // Alterna (toggle) tipo do atributo
    const type =
        senha.getAttribute("type") === "password" ? "text" : "password";
    senha.setAttribute("type", type);
    // Alterna o ícone
    this.classList.toggle("bi-eye");
});

// Valida o campo de confirmação de senha
const checkConfirmPassword = () => {
    let valid = false;
    // Checa a confirmação de senha
    const confirmacaoSenhaVal = confirmacaoSenha.value.trim();
    const senhaVal = senha.value.trim();
    if (!isRequired(confirmacaoSenhaVal)) {
        showsError(confirmacaoSenha, "Confirmação de senha é obrigatória");
    } else if (senhaVal !== confirmacaoSenhaVal) {
        showsError(
            confirmacaoSenha,
            "Senha e confirmação de senha são diferentes"
        );
    } else {
        showsSuccess(confirmacaoSenha);
        valid = true;
    }
    return valid;
};

toggleConfirmacaoSenha.addEventListener("click", function () {
    // Alterna o tipo do atributo
    const type =
        confirmacaoSenha.getAttribute("type") === "password"
            ? "text"
            : "password";
    confirmacaoSenha.setAttribute("type", type);

    // Alterna o ícone
    this.classList.toggle("bi-eye");
});

// Modifica o manipulador de eventos de envio
form.addEventListener("submit", function (e) {
    // Previne a submissão do formulário
    e.preventDefault();
    const isUserNameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmationValid = checkConfirmPassword();
    // Submete o formulário, se válido
    if (
        isUserNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid
    ) {
        //TODO: Adicionar envio de formulário
        window.location.href = "./index.html";
    }
});
