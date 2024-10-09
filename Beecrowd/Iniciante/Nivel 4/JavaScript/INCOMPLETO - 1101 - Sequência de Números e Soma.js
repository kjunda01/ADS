/*
 beecrowd | 1101
Sequência de Números e Soma

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).
Entrada

O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.
Saída

Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída

5 2
6 3
5 0
	

2 3 4 5 Sum=14
3 4 5 6 Sum=18 
*/
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");
listaTemp = [];

function fazRange(inicial, final) {
    for (let i = inicial; i <= final; i++) {
        console.log(`${i}`);
    }
}

for (i of lines) {
    let teste = i.split(" ");
    if (Number(teste[0]) > Number(teste[1])) {
        valorInicial = Number(teste[1]);
        valorFinal = Number(teste[0]);
    } else {
        valorInicial = Number(teste[0]);
        valorFinal = Number(teste[1]);
    }

    console.log(`Inicial: ${valorInicial} - Final: ${valorFinal}`);
}
fazRange(valorInicial, valorFinal);

