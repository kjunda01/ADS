// const frutas = ['Pera', 'Uva', 'Maçã']

// for (let i in frutas){
//     console.log(frutas[i])
// }

const pessoa = {
    nome: "Luiz",
    sobrenome: "Otávio",
    idade: 30,
};

console.log();
console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log();

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
