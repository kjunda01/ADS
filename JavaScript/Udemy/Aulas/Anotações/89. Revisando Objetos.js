// //Revisando objetos

// const pessoa1 = new Object();
// pessoa1.nome = "Teste";
// pessoa1.sobrenome = "Silva";
// pessoa1.idade = 27;
// pessoa1.falarNome = function () {
//     return `${this.nome} está falando seu nome.`;
// };

// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (chave in pessoa1) {
//     console.log(chave, pessoa1[chave]);
// }

// Factory function / Constructor functions

// Factory function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,

//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         },
//     };
// }
// const p1 = criaPessoa("Teste", "12345");
// console.log(p1.nomeCompleto());

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// A palavra new faz...
// {} <- this -> this

const p1 = new Pessoa("João", "Silva");
Object.freeze(p1);
p1.nome = "Outra coisa";
const p2 = new Pessoa("Maria", "Souza");
console.log(p1);
console.log(p2);
