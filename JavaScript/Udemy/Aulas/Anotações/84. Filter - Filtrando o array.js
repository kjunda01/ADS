// // Filter -> Sempre retorna um array com a mesma
// //quantidade de elementos do array original ou menos.

// // retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// /*usando a função separada*/
// function callbackFilter(elemento, indice, arrayCompleto) {
//     return elemento > 10;
// }

// /*usando uma função anônima*/
// const numerosFiltrados1 = numeros.filter(function (elemento) {
//     return numeros > 10;
// });
// console.log(numerosFiltrados1);

// /*usando arrow function*/
// const numerosFiltrados2 = numeros.filter((elemento) => elemento > 10);
// console.log(numerosFiltrados2);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];

const pessoasNome7 = pessoas.filter((objeto) => objeto.nome.length >= 7);
const pessoas50 = pessoas.filter((objeto) => objeto.idade > 50);
const pessoasNomeA = pessoas.filter((objeto) => objeto.nome.toLowerCase().endsWith("a"));

console.log(pessoasNome7);
console.log();
console.log(pessoas50);
console.log();
console.log(pessoasNomeA);
