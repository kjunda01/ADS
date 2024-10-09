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

function fatorial(numero) {
    let fat = numero;
    if (fat === 0 || fat === 1) {
        return 1;
    }
    if (fat === 2) {
        return 2;
    }

    while (numero >= 2) {
        fat = fat * (numero - 1);
        numero -= 1;
    }
    return fat;
}

for (let i = 0; i < lines.length; i++) {
    let numeroFatorial1 = Number(lines[i][0]);
    let numeroFatorial2 = Number(lines[i][2]);

    console.log(fatorial(numeroFatorial1) + fatorial(numeroFatorial2));
}
