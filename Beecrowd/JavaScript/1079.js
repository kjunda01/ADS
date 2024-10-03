/*
 beecrowd | 1079
Médias Ponderadas

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.
Entrada

O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.
Saída

Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída

3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0
	

5.7
6.3
9.3 
*/

// Importa o módulo 'fs' para ler a entrada
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");

// Função para calcular a média ponderada
function calcularMediaPonderada(a, b, c) {
    const pesoA = 2;
    const pesoB = 3;
    const pesoC = 5;
    const somaPesos = pesoA + pesoB + pesoC;
    
    return ((a * pesoA) + (b * pesoB) + (c * pesoC)) / somaPesos;
}

// Primeira linha é o número de casos
const N = parseInt(lines[0], 10);

// Inicializa um array para armazenar as médias
const medias = [];

// Processa cada caso de teste
for (let i = 1; i <= N; i++) {
    const valores = lines[i].split(" ").map(Number);
    const media = calcularMediaPonderada(valores[0], valores[1], valores[2]);
    medias.push(media);
}

// Exibe os resultados
medias.forEach(media => {
    console.log(media.toFixed(1));
});
