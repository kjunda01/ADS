/*
 beecrowd | 1045
Tipos de Triângulos

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

    se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
    se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

Entrada

A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).
Saída

Imprima todas as classificações do triângulo especificado na entrada.
Exemplos de Entrada 	Exemplos de Saída

7.0 5.0 7.0
	

TRIANGULO ACUTANGULO
TRIANGULO ISOSCELES

6.0 6.0 10.0
	

TRIANGULO OBTUSANGULO
TRIANGULO ISOSCELES

6.0 6.0 6.0
	

TRIANGULO ACUTANGULO
TRIANGULO EQUILATERO

5.0 7.0 2.0
	

NAO FORMA TRIANGULO

6.0 8.0 10.0
	

TRIANGULO RETANGULO
*/

var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split(" ").map(Number).sort((a, b) => b - a);

let A = linhas[0];
let B = linhas[1];
let C = linhas[2];

let resp = [];

if (A >= B + C) {
    resp.push("NAO FORMA TRIANGULO");
} else {
    if (A ** 2 === (B ** 2 + C ** 2)) {
        resp.push("TRIANGULO RETANGULO");
    }
    if (A ** 2 > (B ** 2 + C ** 2)) {
        resp.push("TRIANGULO OBTUSANGULO");
    }
    if (A ** 2 < (B ** 2 + C ** 2)) {
        resp.push("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
        resp.push("TRIANGULO EQUILATERO");
    } else if (A === B || B === C || A === C) {
        resp.push("TRIANGULO ISOSCELES");
    }
}

for (let i = 0; i < resp.length; i++) {
    console.log(resp[i]);
}
