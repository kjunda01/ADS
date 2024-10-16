// Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números
const somaNumeros = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
//console.log(somaNumeros);

// retorne um array com os pares (Filter)
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
//console.log(pares);

// retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
//console.log(dobro);

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 10 },
    { nome: "Rosana", idade: 64 },
    { nome: "Wallace", idade: 43 },
];
// retorne a pessoa mais velha

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    // se o acumulador for maior ele retorna o acumulador
    if (acumulador.idade > valor.idade) return acumulador;
    // se não, ele retorna o proprio valor
    return valor;

    // quem for o mais velho termina sendo o acumulador
});

console.log(maisVelha);
