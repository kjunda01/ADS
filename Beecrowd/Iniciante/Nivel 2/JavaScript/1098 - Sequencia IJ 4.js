/*
 beecrowd | 1098
Sequencia IJ 4

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada

Não há nenhuma entrada neste problema.
Saída

Imprima a sequencia conforme exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída
	

I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=? 
*/
for (let i = 0; i <= 2; i += 0.2) {
    for (let rep = 0; rep <= 2; rep++) {
        console.log(Math.ceil(i));
    }
}
