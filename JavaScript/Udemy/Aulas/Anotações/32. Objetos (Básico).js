// FUNÇÃO FACTORY - ELA CRIA, RETORNA OBJETOS

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala() {
            console.log(`A minha idade atual é ${this.idade}.`);
        },
    };
}

const pessoa1 = criarPessoa("Sinval", "Junior", 27);
const pessoa2 = criarPessoa("Giovana", "Morais", 28);
const pessoa3 = criarPessoa("Neneco", "Barriga", 0);
const pessoa4 = criarPessoa("Samuel", "Esteves Silva Morais", 0);
const pessoa5 = criarPessoa("Esther", "Alexandrina Silva Morais", 0);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

pessoa1.fala()
