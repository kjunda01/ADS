/*
 beecrowd | 2812
Laércio

Por Felipe C. Ochial, URI BR Brazil
Timelimit: 1

Armandinho tem um amigo o tanto quanto chato, chamado Laércio. Quando jogam o jogo do mestre manda, um jogo onde alguém dá uma ordem e alguém a cumpre, e em vez de dar ordens legais como subir em uma árvore, pular o muro, plantar bananeira ou organizar manifestações para derrubar o governo (independente de quem estiver no poder) ele sempre pede algo maçante. Em sua última partido, Laércio exigiu que Armandinho ordenasse uma lista de números, de forma que apenas os números ímpares aparecessem e o primeiro item seja o maior, o segundo seja o menor, o terceiro o segundo maior, o quarto seja o segundo menor e assim por diante. Como fazer isso a mão é muito chato, Armandinho procurou sua ajuda.
Entrada

A entrada consiste de um inteiro N que representa o número de casos testes ( 1<N<1000 ). Cada caso teste começa com um inteiro M, que representa o tamanho da lista (0<M<100). Seguem M inteiros Mi (0<Mi < 1000) que representam a lista de Laércio.
Saída

Imprima a lista ordenada como Laércio requisitou, com um espaço entre os valores, pulando uma linha a cada caso teste.
Exemplo de Entrada 	Exemplo de Saída

3

10

1 2 3 4 5 6 7 8 9 10

7

2 4 6 8 10 12 14

4

9 7 77 63
	

9 1 7 3 5

77 7 63 9

Aquecimento OBI 2018 Fase Estadual

*/
// ordenar uma lista de números,
// de forma que apenas os números ímpares aparecessem
// e o primeiro item seja o maior,
// o segundo seja o menor,
// o terceiro o segundo maior,
// o quarto seja o segundo menor
// e assim por diante

let stringTeste = `
3

10

1 2 3 4 5 6 7 8 9 10

7

2 4 6 8 10 12 14

4

9 7 77 63
`;

var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.trim().split("\n");

let listaGeral = [];

for (let i = 0; i < linhas.length; i++) {
    if (linhas[i].trim() !== "") {
        let teste = linhas[i].trim();
        listaGeral.push(teste.split(" "));
    }
}

for (let i = 0; i < listaGeral.length; i++) {
    console.log(listaGeral[i]);
}
