// Map
// Map tem sempre o mesmo tamanho do array original

// /*usando a função separada*/
// function callbackMap(elemento, indice, arrayCompleto) {
//     return elemento * 2;
// }

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobro = numeros.map((numero) => numero * 2);
// console.log(dobro);

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];
// retorne uma string com o nome da pessoa
// const nomePessoa = pessoas.map((objeto) => objeto.nome);
// console.log(nomePessoa);

// remova apenas a chave nome do objeto
// const apenasIdade = pessoas.map(function (objeto) {
//     return { idade: objeto.idade };
// });

// remova apenas a chave nome do objeto
// const apenasIdade = pessoas.map(function (objeto) {
//     delete objeto.nome;
//     return objeto;
// });

// remova apenas a chave nome do objeto
// const apenasIdade = pessoas.map((objeto) => ({ idade: objeto.idade }));
// console.log(apenasIdade);

// Adicione uma chave ID em cada objeto
// const addID = pessoas.map(function (objeto, indice) {
//     return { ID: indice, nome: objeto.nome, idade: objeto.idade };
// });

// usando o valor por referencia, para uma copia do objeto orignal
// const addID = pessoas.map(function (objeto, indice) {
//     objeto.ID = indice + 1;
//     return objeto;
// });

// vamos usar o spread opereator para criar um novo objeto
const addID = pessoas.map(function (objeto, indice) {
    const novoObjeto = { ...objeto };
    novoObjeto.ID = indice + 1;
    return novoObjeto;
});

console.log(pessoas);
console.log();
console.log(addID);

addID.forEach((element) => {
    console.log(`ID: ${element.ID}`);
    console.log(`Nome: ${element.nome}`);
    console.log(`Idade: ${element.idade}`);
    console.log();
});
