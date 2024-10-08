/*
 beecrowd | 1044
Múltiplos

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
Entrada

A entrada contém valores inteiros.
Saída

A saída deve conter uma das mensagens conforme descrito acima.
Exemplo de Entrada 	Exemplo de Saída

6 24
	

Sao Multiplos

6 25
	

Nao sao Multiplos
*/
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

A = Number(lines[0]);
B = Number(lines[1]);

const resposta =
    A % B === 0 || B % A === 0
        ? console.log("Sao Multiplos")
        : console.log("Nao sao Multiplos");
