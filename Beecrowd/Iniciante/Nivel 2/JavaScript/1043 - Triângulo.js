/*
 beecrowd | 1043
Triângulo

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X
Entrada

A entrada contém três valores reais.
Saída

O resultado deve ser apresentado com uma casa decimal.
Exemplo de Entrada 	Exemplo de Saída

6.0 4.0 2.0
	

Area = 10.0

6.0 4.0 2.1
	

Perimetro = 12.1
*/

var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split(" ");

const A = Number(linhas[0]);
const B = Number(linhas[1]);
const C = Number(linhas[2]);

if (A + B > C && A + C > B && B + C > A) {
    const perimetro = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    const base = A + B;
    const altura = C;
    const area = (base * altura) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}
