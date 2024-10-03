/*
 beecrowd | 1080
Maior e Posição

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.
Entrada

O arquivo de entrada contém 100 números inteiros, positivos e distintos.
Saída

Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída

2
113
45
34565
6
...
8
 
	

34565
4 
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let maior = -1;
let posicao = 0;
for (let i = 0; i <= 100; i++) {
    if (Number(lines[i]) >= maior) {
        posicao = i+1;
        maior = Number(lines[i]);
    }
}
console.log(maior);
console.log(posicao);
