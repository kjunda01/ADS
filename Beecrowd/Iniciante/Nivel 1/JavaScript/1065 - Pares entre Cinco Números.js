/*
 beecrowd | 1065
Pares entre Cinco Números

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.
Entrada

O arquivo de entrada contém 5 valores inteiros quaisquer.
Saída

Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
Exemplo de Entrada 	Exemplo de Saída

7
-5
6
-4
12
	

3 valores pares
*/

var input = require("fs").readFileSync("stdin", "utf8").trim();
var lines = input.split("\n");
// lines = `7
// -5
// 6
// -4
// 12
// `
//     .trim()
//     .split("\n");

let contador = 0;

for (let i = 0; i <= lines.length; i++) {
    let linhas = Number(lines[i]);
    if (linhas % 2 === 0) {
        contador++;
    }
}
console.log(`${contador} valores pares`);
