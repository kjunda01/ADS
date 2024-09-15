/*beecrowd | 1041
Coordenadas de um Ponto
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).



Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.

Exemplo de Entrada	Exemplo de Saída
4.5 -2.2

Q4

0.1 0.1

Q1

0.0 0.0

Origem
*/

export function problem(lines) {
    //var input = require("fs").readFileSync("/dev/stdin", "utf8");
    //var lines = input.split("\n");

    let [x, y] = lines
        .shift()
        .trim()
        .split(" ")
        .map((x) => parseFloat(x));

    if (x > 0.0) {
        if (y > 0.0) console.log("Q1");
        else if (y < 0.0) console.log("Q4");
        else console.log("Eixo X");
    } else if (x < 0.0) {
        if (y > 0.0) console.log("Q2");
        else if (y < 0.0) console.log("Q3");
        else console.log("Eixo X");
    } else {
        if (y > 0.0) console.log("Eixo Y");
        else if (y < 0.0) console.log("Eixo Y");
        else console.log("Origem");
    }
}
