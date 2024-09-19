/*
 beecrowd | 1159
Soma de Pares Consecutivos

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

O programa deve ler um valor inteiro X indefinidas vezes. (O programa irá parar quando o valor de X for igual a 0). Para cada X lido, imprima a soma dos 5 pares consecutivos a partir de X, inclusive o X , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.
Entrada

O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.
Saída

Imprima a saida conforme a explicação acima e o exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída

4
11
0
	

40
80 
*/

//var input = require("fs").readFileSync("stdin", "utf8").trim().split("\n");
var input = `
4
11
0
`
    .trim()
    .split("\n");

let parar = 0;
let paresConsecutivos = 5;
let numeroAtual;
let primeiroPar;
let soma = [];

for (let i = 0; i < input.length; i++) {
    numeroAtual = Number(input[i]);
    if (numeroAtual === parar) break;
    else {
        // aqui começa o programa
        console.log();
        console.log(`Passou aqui com o número: ${numeroAtual}`);

        for (let j = 0; j < paresConsecutivos; j++) {
            console.log(
                `Passou aqui com o número: ${numeroAtual}, ${j + 1} vez(es).`
            );
            soma.push(j);
        }
    }
}

for (let linha of input) {
    console.log(linha);
}

for (let i = 0; i < input.length; i++) {
    numeroAtual = Number(input[i]);
    console.log(numeroAtual)
}
