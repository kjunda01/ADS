const cpfDOM = document.querySelector("#inputCPF");

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, "");
        },
    });
}

const cpf = new ValidaCPF(cpfDOM.value);

console.log(cpf.cpfLimpo);
// cpf.valida();
