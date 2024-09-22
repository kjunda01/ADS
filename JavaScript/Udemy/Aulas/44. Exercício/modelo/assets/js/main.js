function escopoPrincipal() {
    const formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const peso = document.querySelector(".inputPeso").value;
        const altura = document.querySelector(".inputAltura").value;
        const imc = peso / altura ** 2;
        let resultado = document.querySelector(".resultado");

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
}

escopoPrincipal();
