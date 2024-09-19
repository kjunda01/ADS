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

var input = require("fs").readFileSync("stdin", "utf8").trim().split("\n");

let parar = 0;
let paresConcecutivos = 5;


for (let numeroAtual of input) {
    numeroAtual = Number(numeroAtual);
    
    // se o número atual ofr 0 ele para o loop
    if (numeroAtual === parar) break;

    let soma = 0;

    // iniciou a soma e acrescentou 1 para chegar ao proximo par
    if (numeroAtual % 2 !== 0) {
        numeroAtual += 1;
        
    }

    // fez a soma dos 5 pares
    for (let j = 0; j < paresConcecutivos; j++) {
        soma += numeroAtual;
        numeroAtual += 2;
    }

    console.log(soma);
}
