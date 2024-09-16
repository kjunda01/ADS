/*
 beecrowd | 1145
Sequência Lógica 2

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Escreva um programa que leia dois valores X e Y. A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.
Entrada

O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).
Saída

Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número, conforme exemplo abaixo. Não deve haver espaço em branco após o último valor da linha.
Exemplo de Entrada 	Exemplo de Saída

3 99
	

1 2 3
4 5 6
7 8 9
10 11 12
...
97 98 99 
*/

// Leitura da entrada padrão
const fs = require('fs');

// Leitura do arquivo stdin (entrada padrão)
const input = fs.readFileSync('stdin', 'utf8');

// Divide a entrada em linhas
const dadosIniciais = input.trim().split('\n');

// Converte as linhas em números inteiros
const x = parseInt(dadosIniciais[0], 10); // Número de elementos por linha
const y = parseInt(dadosIniciais[1], 10); // Número total de elementos

let numeroAtual = 1;  // Inicia com o número 1

while (numeroAtual <= y) {
    let lineNumbers = [];
    
    // Adiciona números à linha
    for (let i = 0; i < x; i++) {
        if (numeroAtual > y) break;
        lineNumbers.push(numeroAtual++);
    }
    
    // Imprime a linha formatada
    console.log(lineNumbers.join(' '));
}
