/*

 beecrowd | 1066
Pares, Ímpares, Positivos e Negativos

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.
Entrada

O arquivo de entrada contém 5 valores inteiros quaisquer.
Saída

Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
Exemplo de Entrada 	Exemplo de Saída

-5
0
-3
-4
12
	

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s) 

*/

//var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number);

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

lines.forEach((valorAtual) => {
  if (valorAtual % 2 === 0) {
    par += 1;
  } else {
    impar += 1;
  }

  if (valorAtual > 0) {
    positivo += 1;
  } else if (valorAtual < 0) {
    negativo += 1;
  }
});

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
