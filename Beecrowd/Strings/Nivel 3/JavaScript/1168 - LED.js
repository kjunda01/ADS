/*
 beecrowd | 1168
LED
Autor Desconhecido
Timelimit: 1

João quer montar um painel de leds contendo diversos números. Ele não possui muitos leds, e não tem certeza se conseguirá montar o número desejado. Considerando a configuração dos leds dos números abaixo, faça um algoritmo que ajude João a descobrir a quantidade de leds necessário para montar o valor.

Obs.: Para programadores de Javascript, recomenda-se o uso de "input.trim().split('\n')" para evitar erros conhecidos.

Entrada

A entrada contém um inteiro N, (1 ≤ N ≤ 1000) correspondente ao número de casos de teste, seguido de N linhas, cada linha contendo um número (1 ≤ V ≤ 10100) correspondente ao valor que João quer montar com os leds.
Saída

Para cada caso de teste, imprima uma linha contendo o número de leds que João precisa para montar o valor desejado, seguido da palavra "leds".
Exemplo de Entrada 	Exemplo de Saída

3
115380
2819311
23456
	

27 leds
29 leds
25 leds

Agradecimentos a Cassio F.

*/

var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");
const casosTeste = Number(lines[0]);

function somaLED(num) {
    let numero = 0;
    for (let i = 0; i <= num.length; i++) {
        if (num[i] === "0") numero += 6;
        if (num[i] === "1") numero += 2;
        if (num[i] === "2") numero += 5;
        if (num[i] === "3") numero += 5;
        if (num[i] === "4") numero += 4;
        if (num[i] === "5") numero += 5;
        if (num[i] === "6") numero += 6;
        if (num[i] === "7") numero += 3;
        if (num[i] === "8") numero += 7;
        if (num[i] === "9") numero += 6;
    }
    return numero;
}
for (let i = 1; i <= casosTeste; i++) {
    console.log(`${somaLED(lines[i])} leds`);
}
