// Manipulando prototipos

// // new Object -> Object.prototype
// const objetoA = {
//     chaveA: "A",
//     // __proto__: Object.prototype
// };

// // new Object -> Object.prototype
// const objetoB = {
//     chaveB: "B",
//     // __proto__: ObjetoA
// };

// // new Object -> Object.prototype
// const objetoC = new Object();
// objetoC.chaveC = "C";

// Object.setPrototypeOf(objetoB, objetoA);
// Object.setPrototypeOf(objetoC, objetoB);

// console.log(objetoC.chaveA);
// console.log(objetoC.chaveB);
// console.log(objetoC.chaveC);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);

p1.desconto(80);
p1.aumento(80);
console.log(p1);

const p2 = {
    nome: "Caneca",
    preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(80);
console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.preco = 123;
p3.aumento(12);
console.log(p3);
