// defineProperty - Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    // PROPERTY configura apenas a chave que eu especificar
    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave.
        configurable: true, // configuravel

        get: function () {
            return estoquePrivado;
        },

        set: function (valor) {
            if (typeof valor !== "number") {
                console.log("Bad value");
                return;
            }

            estoquePrivado = valor;
        },
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        },
    };
}

const p2 = criaProduto("Camiseta");
console.log(p2);
p2.nome = "qwerty";
console.log(p2.nome)