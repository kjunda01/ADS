/*
 beecrowd | 1036
Fórmula de Bhaskara

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.
Entrada

Leia três valores de ponto flutuante (double) A, B e C.
Saída

Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
Exemplos de Entrada 	Exemplos de Saída

10.0 20.1 5.1
	

R1 = -0.29788
R2 = -1.71212

0.0 20.0 5.0
	

Impossivel calcular

10.3 203.0 5.0
	

R1 = -0.02466
R2 = -19.68408

10.0 3.0 5.0
	

Impossivel calcular
*/

//R1 = -0.29788
//R2 = -1.71212
//Impossivel calcular

var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split(" ");

const A = Number(linhas[0]);
const B = Number(linhas[1]);
const C = Number(linhas[2]);

const delta = B ** 2 - 4 * A * C;

const R1 = (((-B) + Math.sqrt(delta)) / Number(2 * A))
const R2 = (((-B) - Math.sqrt(delta)) / Number(2 * A))

if (A != 0 && delta > 0) {
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
} else {
    console.log("Impossivel calcular")
}

