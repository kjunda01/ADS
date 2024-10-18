/*
 beecrowd | 1114
Senha Fixa

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 
Entrada

A entrada é composta por vários casos de testes contendo valores inteiros.
Saída

Para cada valor lido mostre a mensagem correspondente à descrição do problema.
Exemplo de Entrada 	Exemplo de Saída

2200
1020
2022
2002
	

Senha Invalida
Senha Invalida
Senha Invalida
Acesso Permitido

Formatação e inserção no portal por Cássio Favaretto.

*/
var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(/\r?\n/).map(Number);

const resp = lines.forEach(function (valor) {
    if (valor === 2002) {
        console.log("Acesso Permitido");
        process.exit();
    } else {
        console.log("Senha Invalida");
    }
});
