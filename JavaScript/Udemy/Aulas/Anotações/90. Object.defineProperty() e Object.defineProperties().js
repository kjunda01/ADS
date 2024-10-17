// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    // PROPERTY configura apenas a chave que eu especificar
    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave.
        // value pode ser qqr coisa, funcao... etc
        value: estoque, // valor da chave
        writable: false, // pode alterar o valor
        configurable: true, // configuravel
    });

    // PROPERTIES configura várias
    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true, // mostra a chave.
    //         // value pode ser qqr coisa, funcao... etc
    //         value: nome, // valor da chave
    //         writable: true, // pode alterar o valor
    //         configurable: true, // configuravel
    //     },
    //     preco: {
    //         enumerable: true, // mostra a chave.
    //         // value pode ser qqr coisa, funcao... etc
    //         value: preco, // valor da chave
    //         writable: true, // pode alterar o valor
    //         configurable: true, // configuravel
    //     },
    // });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object(p1));

for (let chave in p1) {
    console.log(chave);
}
