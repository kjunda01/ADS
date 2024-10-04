/*
 beecrowd | 1097
Sequencia IJ 3

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada

Não há nenhuma entrada neste problema.
Saída

Imprima a sequencia conforme exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída
	

I=1 J=7
I=1 J=6
I=1 J=5

I=3 J=9
I=3 J=8
I=3 J=7

I=5 J=11
I=5 J=10
I=5 J=9

I=7 J=13
I=7 J=12
I=7 J=11

I=9 J=15
I=9 J=14
I=9 J=13 
*/

let jInicio = 7;
for (let I = 1; I <= 9; I += 2) {
    for (let l = 0; l <= 2; l++) {
        console.log(`I=${I} J=${jInicio}`);
        jInicio--;
    }
    jInicio += 5;
}
