class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get falar() {
        console.log(`${this.nome} está falando!`);
    }

    comer() {
        console.log(`${this.nome} está comendo!`);
    }

    beber() {
        console.log(`${this.nome} está bebendo!`);
    }
}

const pessoa1 = new Pessoa("João", "B.");
const pessoa2 = new Pessoa("Maria", "C.");
const pessoa3 = new Pessoa("José", "A.");
const pessoa4 = new Pessoa("Jorge", "D.");

pessoa1.falar;
pessoa2.falar;
pessoa3.falar;
pessoa4.falar;
