/*
 beecrowd | 1075
Resto 2

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
Entrada

A entrada contém um valor inteiro N (N < 10000).
Saída

Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
Exemplo de Entrada 	Exemplo de Saída

13
	

2
15
28
41
... 
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = Number(input.split("\n"));

//Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
for (let i = 1; i <= 10000; i++) {
    if (i % lines === 2) console.log(i) 
}
