/*
 beecrowd | 1164
Número Perfeito

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Na matemática, um número perfeito é um número inteiro para o qual a soma de todos os seus divisores positivos próprios (excluindo ele mesmo) é igual ao próprio número. Por exemplo o número 6 é perfeito, pois 1+2+3 é igual a 6. Sua tarefa é escrever um programa que imprima se um determinado número é perfeito ou não.
Entrada

A entrada contém vários casos de teste. A primeira linha da entrada contém um inteiro N (1 ≤ N ≤ 20), indicando o número de casos de teste da entrada. Cada uma das N linhas seguintes contém um valor inteiro X (1 ≤ X ≤ 108), que pode ser ou não, um número perfeito.
Saída

Para cada caso de teste de entrada, imprima a mensagem “X eh perfeito” ou “X nao eh perfeito”, de acordo com a especificação fornecida.
Exemplo de Entrada 	Exemplo de Saída

3
6
5
28
	

6 eh perfeito
5 nao eh perfeito
28 eh perfeito 
*/

var input = require("fs").readFileSync("./dev/stdin", "utf8").trim();
var lines = input.split(/\r?\n/).map(Number);

console.log(lines);

for (let i in lines) {
    for (let j = 0; j <= lines[i]; j++) {
        let temp = [];
        if (lines[i] % j === 0) {
            temp.push(j);
            const resp = temp.reduce((elemento) => {
                return temp += elemento;
            });
            console.log(resp);
        }
    }
}
