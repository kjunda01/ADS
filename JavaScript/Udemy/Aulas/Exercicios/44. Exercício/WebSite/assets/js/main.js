/*
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.querySelector(".inputPeso").value;
    const altura = document.querySelector(".inputAltura").value;
    const imc = peso / altura ** 2;
    const resultado = document.querySelector(".resultado");

    function calculaIMC(valorDoIMC = 0) {
        if (valorDoIMC <= 18.5) {
            return `Abaixo do peso`;
        } else if (valorDoIMC <= 24.9) {
            return `Peso normal`;
        } else if (valorDoIMC <= 29.9) {
            return `Sobrepeso`;
        } else if (valorDoIMC <= 34.9) {
            return `Obesidade grau I`;
        } else if (valorDoIMC <= 39.9) {
            return `Obesidade grau II`;
        } else {
            return `Obesidade grau III`;
        }
    }

    resultado.innerHTML += `Seu IMC é ${imc.toFixed(2)} (${calculaIMC(
        imc
    )})</br>`;

    console.log(calculaIMC(imc));
    console.log(imc.toFixed(2));
    console.log(peso);
    console.log(altura);
});

formulario.addEventListener("reset", function (event) {
    location.reload();
});
*/

// Capturar evento submit e reset do formulário:
const formulario = document.querySelector(".formulario");

//Função para atuar quando clicar no botão
formulario.addEventListener("submit", function (e) {
    // Não atualiza a página
    e.preventDefault();

    console.log("Evento (atualizar a página) previnido.");

    const inputPeso = e.target.querySelector(".inputPeso");
    const inputAltura = e.target.querySelector(".inputAltura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getIMC(peso, altura);
    const nivelIMC = defineValorIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;

    if (!peso && !altura) {
        setResultado("Peso e altura inválidos!", false);
        console.log("Peso e altura inválidos!");
    } else if (!peso) {
        setResultado("Peso inválido!", false);
        console.log("Peso inválido!");
    } else if (!altura) {
        setResultado("Altura inválida!", false);
        console.log("Altura inválida!");
    } else {
        setResultado(msg, true);
        console.log(msg);
    }
});

// Função para resetar a página
formulario.addEventListener("reset", function (e) {
    // Atualiza a página, resetanto tudo
    location.reload();
});

//Arrow function para calcular o IMC
function getIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        return `NEGATIVO!`;
    } else {
        imc = (peso / altura ** 2).toFixed(2);
        return imc;
    }
}

// Função para calcular o nivel do IMC
function defineValorIMC(valorDoIMC = 0) {
    if (valorDoIMC <= 0) {
        return `Você tem certeza disso?`;
    }

    if (valorDoIMC <= 18.5) {
        return `Abaixo do peso`;
    }

    if (valorDoIMC <= 24.9) {
        return `Peso normal`;
    }

    if (valorDoIMC <= 29.9) {
        return `Sobrepeso`;
    }

    if (valorDoIMC <= 34.9) {
        return `Obesidade grau I`;
    }

    if (valorDoIMC <= 39.9) {
        return `Obesidade grau II`;
    } if (valorDoIMC >= 40) {
        return `Obesidade grau III`;
    }
}

// Função para criar um parágrafo
function criaParagrafo() {
    const p = document.createElement("p");
    return p;
}

// Função para setar o valor do parágrafo na tela
function setResultado(msg, isValid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add("paragrafo-resultado");
    } else {
        p.classList.add("paragrafo-incorreto");
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
