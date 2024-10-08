/*
 beecrowd | 1096
Sequencia IJ 2

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada

Não há nenhuma entrada neste problema.
Saída

Imprima a sequencia conforme exemplo abaixo
Exemplo de Entrada 	Exemplo de Saída
	

I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=7
I=3 J=6
I=3 J=5
...
I=9 J=7
I=9 J=6
I=9 J=5 
*/

for (let I = 1; I <= 9; I += 2) {
    let J = 7;
    while (J >= 5) {
        for (let l = 0; l <= 2; l++) {
            console.log(`I=${I} J=${J}`);
            J -= 1;
        }
    }
}
