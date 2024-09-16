/*beecrowd | 1115
Quadrante

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).
Entrada

A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.
Saída

Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.
Exemplo de Entrada 	Exemplo de Saída

2 2
3 -2
-8 -1
-7 1
0 2
	

primeiro
quarto
terceiro
segundo

Formatação e inserção no portal por Cássio Favaretto.
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let tamanho = lines.length;

for (let i = 0; i < tamanho; i++) {
    let partes = lines[i].split(" ");

    let x = Number(partes[0]);
    let y = Number(partes[1]);

    if (x > 0) {
        if (y > 0) {
            console.log("primeiro");
        } else if (y < 0) {
            console.log("quarto");
        } else {
            console.log("");
        }
    } else if (x < 0) {
        if (y > 0) {
            console.log("segundo");
        } else if (y < 0) {
            console.log("terceiro");
        } else {
            console.log("");
        }
    }
}
