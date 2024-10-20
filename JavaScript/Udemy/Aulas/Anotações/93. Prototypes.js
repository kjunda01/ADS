// Prototypes
/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, 
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência iunterna para um protótipo (__proto__) que vem da
propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos
acessar uim membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro
no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar
(ou não) tal membro.

*/

// construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// instancia
const pessoa1 = new Pessoa("João", "B."); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa("Maria", "A."); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

Pessoa.prototype.estouAqui = "HahHahahs";
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
};

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.estouAqui);
