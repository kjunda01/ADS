/*
 beecrowd | 1161
Soma de Fatoriais

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia dois valores inteiros M e N indefinidamente. A cada leitura, calcule e escreva a soma dos fatoriais de cada um dos valores lidos. Utilize uma variável apropriada, pois cálculo pode resultar em um valor com mais de 15 dígitos.
Entrada

O arquivo de entrada contém vários casos de teste. Cada caso contém dois números inteiros M (0 ≤ M ≤ 20) e N (0 ≤ N ≤ 20). O fim da entrada é determinado por eof.
Saída

Para cada caso de teste de entrada, seu programa deve imprimir uma única linha, contendo um número que é a soma de ambos os fatoriais (de M e N).
Exemplo de Entrada 	Exemplo de Saída

4 4
0 0
0 2
	

48
2
3 
*/
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");

//function calculaFatorial(numero){
let numero = 4;
let fat = numero

while (numero >= 1) {
    fat += numero * (numero-1)
    numero -= 1;
}
console.log(fat)

//}

// for (let i = 0; i < lines.length; i++) {
//     let numeroFatorial1 = Number(lines[i][0]);
//     let numeroFatorial2 = Number(lines[i][2]);
//     console.log(`Tentativa número: ${i}`)
//     console.log(`Fatorial 1: ${numeroFatorial1} - Fatorial 2: ${numeroFatorial2}`)
//     //console.log(calculaFatorial(numeroFatorial1))

// }
