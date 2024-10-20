// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

// Define a função construtora Produto, que cria um novo objeto Produto com as propriedades nome e preco.
function Produto(nome, preco) {
    this.nome = nome; // Atribui o valor do parâmetro nome à propriedade nome do objeto Produto.
    this.preco = preco; // Atribui o valor do parâmetro preco à propriedade preco do objeto Produto.
}

// Adiciona um método chamado aumento ao protótipo do Produto.
// Este método aumenta o preço do produto em uma quantia especificada.
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia; // Aumenta o preço do produto pela quantia fornecida.
};

// Adiciona um método chamado desconto ao protótipo do Produto.
// Este método diminui o preço do produto em uma quantia especificada.
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia; // Diminui o preço do produto pela quantia fornecida.
};

// Cria uma nova instância de Produto chamada p1, passando "Teste" como nome e 16 como preço.
const p1 = new Produto("Teste", 16);

// Chama o método aumento na instância p1, aumentando o preço em 10.
p1.aumento(10); // O preço de p1 agora é 26 (16 + 10).

// Define uma função construtora Camiseta, que herda de Produto e adiciona uma nova propriedade cor.
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Chama o construtor Produto para inicializar as propriedades nome e preco.
    this.cor = cor; // Atribui o valor do parâmetro cor à propriedade cor do objeto Camiseta.
}

// Configura o protótipo de Camiseta para herdar do protótipo de Produto.
Camiseta.prototype = Object.create(Produto.prototype);

// Define o construtor da Camiseta corretamente.
Camiseta.prototype.constructor = Camiseta;

// Cria uma nova instância de Camiseta chamada camiseta1, passando "Regata", 7.5 e "Preta" como argumentos.
const camiseta1 = new Camiseta("Regata", 7.5, "Preta");

// Chama o método aumento na instância camiseta1, aumentando o preço em 456.
camiseta1.aumento(456); // O preço de camiseta1 agora é 463.5 (7.5 + 456).

// Define uma função construtora Caneca, que herda de Produto e adiciona propriedades material e estoque.
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // Chama o construtor Produto para inicializar as propriedades nome e preco.
    this.material = material; // Atribui o valor do parâmetro material à propriedade material do objeto Caneca.

    // Define a propriedade estoque com acesso controlado (getter e setter).
    Object.defineProperty(this, "estoque", {
        enumerable: true, // A propriedade estoque será enumerável, ou seja, aparecerá em loops.
        configurable: false, // A propriedade estoque não pode ser deletada ou reconfigurada.
        get: () => estoque, // Define um getter que retorna o valor de estoque.
        set: function (valor) { // Define um setter que altera o valor de estoque.
            if (typeof valor !== "number") return; // Se o valor não for um número, não altera o estoque.
            estoque = valor; // Caso contrário, atualiza o valor de estoque.
        },
    });
}

// Configura o protótipo de Caneca para herdar do protótipo de Produto.
Caneca.prototype = Object.create(Produto.prototype);

// Define o construtor da Caneca corretamente.
Caneca.prototype.constructor = Caneca;

// Cria uma nova instância de Caneca chamada caneca, passando "Caneca", 15, "Plastico" e 5 como argumentos.
const caneca = new Caneca("Caneca", 15, "Plastico", 5);

// Exibe o objeto caneca no console, mostrando suas propriedades nome, preco, material e estoque.
console.log(caneca); // Saída: Caneca { nome: 'Caneca', preco: 15, material: 'Plastico' }

// Exibe o estoque da caneca no console, mostrando seu valor atual.
console.log(caneca.estoque); // Saída: 5

// Exibe o objeto camiseta1 no console, mostrando suas propriedades nome, preco e cor após o aumento.
console.log(camiseta1); // Saída: Camiseta { nome: 'Regata', preco: 463.5, cor: 'Preta' }

// Exibe o objeto p1 no console, mostrando suas propriedades nome e preco após o aumento.
console.log(p1); // Saída: Produto { nome: 'Teste', preco: 26 }



/*
Herança?
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto.
Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente).
Por isso estamos usando esse termo para descrever o comportamento desejado.
Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém,
Javascript não é uma linguagem que apresenta essa característica em específico,
portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação".
Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Mais especificamente no trecho:
Camiseta.prototype = Object.create(Produto.prototype);
Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype.
Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto.
Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype
(e assim por diante até chegar no topo da cadeia de protótipos).
Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.
*/