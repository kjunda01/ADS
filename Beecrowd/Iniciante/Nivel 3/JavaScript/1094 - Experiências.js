/*
beecrowd | 1094
Experiências
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.

Exemplo de Entrada	Exemplo de Saída
10
10 C
6 R
15 S
5 C
14 R
9 C
6 R
8 S
5 C
14 R

Total: 92 cobaias
Total de coelhos: 29
Total de ratos: 40
Total de sapos: 23
Percentual de coelhos: 31.52 %
Percentual de ratos: 43.48 %
Percentual de sapos: 25.00 %
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const listaTotal = [],
    listaCoelhos = [],
    listaRatos = [],
    listaSapos = [];

const casosTeste = lines[0];

function acharAnimais(texto) {
    for (let i = 1; i <= casosTeste; i++) {
        if (lines[i].lastIndexOf(texto) > 0) {
            let t = lines[i].replace(" ", "");
            let u = t.replace(texto, "");
            if (texto === "C") listaCoelhos.push(u);
            if (texto === "R") listaRatos.push(u);
            if (texto === "S") listaSapos.push(u);
            listaTotal.push(u);
        }
    }
}

function acharTotal(lista) {
    let soma = 0;
    lista.forEach((element) => {
        soma += Number(element);
    });
    return soma;
}

function achaPorcentagem(lista) {
    const porcentagem = Number((lista / acharTotal(listaTotal)) * 100).toFixed(
        2
    );
    return porcentagem;
}

acharAnimais("C");
acharAnimais("R");
acharAnimais("S");

console.log(`Total: ${acharTotal(listaTotal)} cobaias
Total de coelhos: ${acharTotal(listaCoelhos)}
Total de ratos: ${acharTotal(listaRatos)}
Total de sapos: ${acharTotal(listaSapos)}
Percentual de coelhos: ${achaPorcentagem(acharTotal(listaCoelhos))} %
Percentual de ratos: ${achaPorcentagem(acharTotal(listaRatos))} %
Percentual de sapos: ${achaPorcentagem(acharTotal(listaSapos))} %`);
