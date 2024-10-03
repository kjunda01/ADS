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

var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");

const peso = [2, 3, 5];
const numeroDeTestes = Number(lines[0]);
let contador = 1;
let media = 0;
somaDosPesos = peso[0] + peso[1] + peso[2];

function mediaPonderada(lista) {
    for (let i = 0; i <= lista.length; i++) {
        console.log(i);
        console.log(lista.split(" "));
    }
}

while (contador <= numeroDeTestes) {
    media += mediaPonderada(lines[contador]);
    contador++;
}
console.log(media);
