class Formulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", (evento) => {
            this.handleSubmit(evento);
        });
    }

    handleSubmit(evento) {
        evento.preventDefault();
        const camposValidos = this.isValidFields();
        const senhasValidas = this.isValidPasswords();

        if (camposValidos && senhasValidas) {
            alert("Formulário enviado!");
            this.formulario.submit();
        }
    }

    isValidPasswords() {
        let valid = true;

        const senha = this.formulario.querySelector(".inputSenha");
        const repeteSenha = this.formulario.querySelector(
            ".inputConfirmarSenha"
        );

        if (senha.value !== repeteSenha.value) {
            valid = false;
            this.criaErro(
                senha,
                `Campos "Senha" e "Confirmar senha" precisam ser iguais!`
            );
            this.criaErro(
                repeteSenha,
                `Campos "Senha" e "Confirmar senha" precisam ser iguais!`
            );
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, "A senha precisa ter de 6 a 12 caracteres!");
        }
        if (repeteSenha.value.length < 6 || repeteSenha.value.length > 12) {
            valid = false;
            this.criaErro(
                repeteSenha,
                "A confirmação da senha precisa ter de 6 a 12 caracteres!"
            );
        }
        return valid;
    }

    isValidFields() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll(".validar")) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(
                    campo,
                    `Campo "${label}" não pode estar em branco.`
                );
                valid = false;
            }

            if (campo.classList.contains("inputCPF")) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains("inputUsuario")) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, "CPF inválido!");
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(
                campo,
                "Usuário inválido! Precisa ter entre 3 e 12 caracteres."
            );
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(
                campo,
                "Nome de usuário precisa conter apenas letras e/ou números!"
            );
            valid = false;
        }
        return true;
    }

    criaErro(campo, mensagem) {
        const div = document.createElement("div");
        div.innerHTML = mensagem;
        div.classList.add("error-text");
        campo.insertAdjacentElement("afterend", div);
    }
}

const formulario1 = new Formulario();
