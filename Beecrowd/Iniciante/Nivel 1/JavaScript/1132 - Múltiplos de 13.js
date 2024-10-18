/*
 beecrowd | 1132
Múltiplos de 13

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são
múltiplos de 13 entre X e Y, incluindo ambos.
Entrada

O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente
em ordem crescente.
Saída

Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores
lidos na entrada, inclusive ambos se for o caso.
Sample Input 	Sample Output

100
200
	

13954

Agradecimentos a Cássio F.

*/

var input = require("fs").readFileSync("./dev/stdin", "utf8").trim();
var lines = input.split(/\r?\n/).map(Number);

lines.sort((a, b) => a - b);

let [primeiro, segundo] = lines;

let lista = [];
for (let i = primeiro; i <= segundo; i++) {
    lista.push(i);
}

const resposta = lista.reduce(function (acumulador, valor) {
    // se o valor atual NÃO for divisível por 13 ele pega o acumulador e soma com o valor
    if (valor % 13 !== 0) acumulador += valor;
    // senao for, retorna o acumulador
    return acumulador;
});

console.log(resposta);
