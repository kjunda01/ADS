/*
 beecrowd | 1071
Soma de Impares Consecutivos I

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.
Entrada

O arquivo de entrada contém dois valores inteiros.
Saída

O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.
Exemplo de Entrada 	Exemplo de Saída

6
-5
	

5

15
12
	

13

12
12
	

0
*/
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
//lines = [6, -5];

let X = Number(lines[0]);
let Y = Number(lines[1]);

if (X < 0) {
    X *= -1;
}
if (Y < 0) {
    Y *= -1;
}

let valorMenor = Math.min(Y,X);
let valorMaior = Math.max(Y,X);
let impares = 0;

for (let i = valorMenor; i < valorMaior; i++) {
    if (i % 2 !== 0) {
        impares += i;
    }
}

console.log(impares);
