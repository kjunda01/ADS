/*
 beecrowd | 1133
Resto da Divisão

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Escreva um programa que leia 2 valores X e Y e que imprima todos os valores
entre eles cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.
Entrada

O arquivo de entrada contém 2 valores positivos inteiros quaisquer, não necessariamente em ordem crescente.
Saída

Imprima todos os valores conforme exemplo abaixo, sempre em ordem crescente.
Sample Input 	Sample Output

10
18
	

12
13
17 
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8").trim();
var lines = input.split(/\r?\n/).map(Number);

// pegar os valores de X e Y
let [X, Y] = lines;

// garantir que X seja o menor e Y seja o maior
if (X > Y) {
    [X, Y] = [Y, X]; // troca os valores
}

// Fazer um loop entre os dois valores, excluindo o valor Y
for (let i = X + 1; i < Y; i++) {
    // verificar a condição
    if (i % 5 === 2 || i % 5 === 3) {
        // imprime na tela
        console.log(i);
    }
}
