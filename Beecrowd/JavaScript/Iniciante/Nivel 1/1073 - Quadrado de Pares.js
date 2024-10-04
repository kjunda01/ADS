/*
 beecrowd | 1073
Quadrado de Pares

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.
Entrada

A entrada contém um valor inteiro N (5 < N < 2000).
Saída

Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.
Exemplo de Entrada 	Exemplo de Saída

6
	

2^2 = 4
4^2 = 16
6^2 = 36
  
*/

// var input = require("fs").readFileSync("stdin", "utf8").trim();
// var lines = input.split("\n");
const lines = 2000;
const N = Number(lines);

for (let i = 2; i <= N; i += 2) {
    console.log(`${i}^2 = ${i ** 2}`);
}
