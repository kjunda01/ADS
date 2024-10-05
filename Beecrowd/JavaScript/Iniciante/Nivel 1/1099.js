/*
 beecrowd | 1099
Soma de Ímpares Consecutivos II

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.
Entrada

A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.
Saída

Imprima a soma de todos valores ímpares entre X e Y.
Exemplo de Entrada 	Exemplo de Saída

7

4 5

13 10

6 4

3 3

3 5

3 4

3 8
	

0

11

5

0

0

0

12
*/
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const casosTeste = Number(lines[0]);
let impar = 0;

function achaImpar(lista) {
    const novalista = lista.split(" ");
    novalista.sort();
    let inicio = Number(novalista[0]);
    let final = Number(novalista[1]);

    for (let i = inicio; i < final; i++) {
        if (i % 2 !== 0) {
            impar += i;
        }
    }
    return impar;
}

for (let i = 1; i < casosTeste; i++) {
    console.log(achaImpar(lines[i]));
}
