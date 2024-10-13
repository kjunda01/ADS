// Funções construtoras -> retorna, constroi objetos
// Funções factory -> fabrica objetos

function Pessoa(nome, sobrenome) {
    //variáveis, atributos privados
    const ID = 123456;
    const metodoInterno = function () {
        console.log();
    };

    // atributos e/ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = function () {
        console.log(this.nome + ": sou um método");
    };
}

const p1 = new Pessoa("Sinval", "Junior");
const p2 = new Pessoa("Giovana", "Morais");

console.log(p1.nome);
p2.metodo();
