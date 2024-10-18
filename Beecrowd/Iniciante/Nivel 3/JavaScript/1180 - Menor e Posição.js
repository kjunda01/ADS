/*
 beecrowd | 1180
Menor e Posição

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Faça um programa que leia um valor N. Este N será o tamanho de um vetor X[N]. A seguir, leia cada um dos valores de X, encontre o menor elemento deste vetor e a sua posição dentro do vetor, mostrando esta informação.
Entrada

A primeira linha de entrada contem um único inteiro N (1 < N < 1000), indicando o número de elementos que deverão ser lidos em seguida para o vetor X[N] de inteiros. A segunda linha contém cada um dos N valores, separados por um espaço. Vale lembrar que nenhuma entrada haverá números repetidos.
Saída

A primeira linha apresenta a mensagem “Menor valor:” seguida de um espaço e do menor valor lido na entrada. A segunda linha apresenta a mensagem “Posicao:” seguido de um espaço e da posição do vetor na qual se encontra o menor valor lido, lembrando que o vetor inicia na posição zero.
Exemplo de Entrada 	Exemplo de Saída

10
1 2 3 4 -5 6 7 8 9 10
	

Menor valor: -5
Posicao: 4 
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8").trim();
var lines = input.split(/\r?\n/);

const matriz = lines.map((valor) => valor.split(" ").map(Number));

let menorValor = 999999999999;
let posicao = 0;

for (let i in matriz[1]) {
    let numeroAtual = matriz[1][i];
    if (numeroAtual < menorValor) {
        menorValor = numeroAtual;
        posicao = i;
    }
}
console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${posicao}`);
