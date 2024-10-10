/*
 beecrowd | 1101
Sequência de Números e Soma

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).
Entrada

O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.
Saída

Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída

5 2
6 3
5 0
	

2 3 4 5 Sum=14
3 4 5 6 Sum=18 
*/
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split(/\r?\n/);

function getRange(linha) {
    const listaTemp = [];
    listaTemp.push(Number(linha[0]));
    listaTemp.push(Number(linha[1]));
    listaTemp.sort();
    return listaTemp;
}

function sequencia(listaTemp) {
    const listaSeq = [];
    for (let i = listaTemp[0]; i <= listaTemp[1]; i++) {
        listaSeq.push(i.toString());
    }
    if (listaTemp[0] > 0) {
        return listaSeq;
    } else {
        return "";
    }
}

function somaNumeros(sequencia) {
    let soma = 0;
    if (sequencia !== "") {
        for (let j of sequencia) {
            soma += Number(j);
        }
        return `Sum=${soma}`;
    }
}

function criaResposta(sequencia, somaNumeros) {
    let resp = "";
    if (sequencia !== "") {
        for (let k in sequencia) {
            resp += `${sequencia[k]} `;
        }
        return `${resp}${somaNumeros}`;
    }
}

// Processa cada linha de entrada
lines.forEach((linha) => {
    // separa os valores da lines
    const num = linha.split(" ");

    // Ordena de menor para maior cada linha
    const passo1 = getRange(num);

    // manda uma lista com os numeros ja na sequencia
    const passo2 = sequencia(passo1);

    // faz a soma de todos os numeros da sequencia
    const passo3 = somaNumeros(passo2);

    // cria as respostas concatenando a soma com os numeros
    const passo4 = criaResposta(passo2, passo3);

    // Imprime na tela os resultados
    const passo5 = passo4 === undefined ? "" : console.log(passo4);
});
