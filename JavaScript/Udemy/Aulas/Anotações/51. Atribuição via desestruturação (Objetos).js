const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Avenida Brasil",
        numero: 320,
    },
};

// atribuição via desestruturação

// const { nome, idade } = pessoa;
// console.log(nome, idade);

// const { endereco: { rua, numero } } = pessoa;
// console.log(rua, numero);

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);