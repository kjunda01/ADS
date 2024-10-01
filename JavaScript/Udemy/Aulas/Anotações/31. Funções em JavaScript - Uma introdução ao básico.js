function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();

function saudacaoComArgumento(nome) {
    console.log(nome);
}

saudacaoComArgumento("Olá mundo novamente!");

function somaDoisValores(primeiroValor = 1, segundoValor = 1) {
    const resultado = primeiroValor + segundoValor;
    return resultado;
}

console.log(`A soma dos dois valores é: ${somaDoisValores(1, 3)}`);

// FORMA PARA CHAMAR FUNÇÃO USANDO UMA VARIÁVEL
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));

// FORMA PARA CHAMAR FUNÇÃO USANDO ARROW FUNCTIONS (=>)
const multiplicaPor3 = (n) => n * 3;

console.log(multiplicaPor3(25));
