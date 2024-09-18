/*
 beecrowd | 1072
Intervalo 2

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.
Entrada

A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 
Saída

Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
Exemplo de Entrada 	Exemplo de Saída

4
14
123
10
-25
	

2 in
2 out 
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let quantidadeDeTestes = Number(lines[0]);

let numerosIn = [];
let numerosOut = [];

for (let i = 0; i < quantidadeDeTestes; i++) {
    let testando = Number(lines[i + 1]);
    if (testando >= 10 && testando <= 20) {
        numerosIn.push(testando);
    } else {
        numerosOut.push(testando);
    }
}

console.log(numerosIn.length, "in");
console.log(numerosOut.length, "out");
