/*
 beecrowd | 1068
Balanço de Parênteses I

Por Neilor Tonin, URI Brasil
Timelimit: 1

Dada uma expressão qualquer com parênteses, indique se a quantidade de parênteses está correta ou não, sem levar em conta o restante da expressão. Por exemplo:

a+(b*c)-2-a        está correto
(a+b*(2-c)-2+a)*2  está correto

enquanto

(a*b-(2+c)         está incorreto
2*(3-a))           está incorreto
)3+b*(2-c)(        está incorreto

Ou seja, todo parênteses que fecha deve ter um outro parênteses que abre correspondente e não pode haver parênteses que fecha sem um previo parenteses que abre e a quantidade total de parenteses que abre e fecha deve ser igual.
Entrada

Como entrada, haverá N expressões (1 <= N <= 10000), cada uma delas com até 1000 caracteres.
Saída

O arquivo de saída deverá ter a quantidade de linhas correspondente ao arquivo de entrada, cada uma delas contendo as palavras correct ou incorrect de acordo com as regras acima fornecidas.
Exemplo de Entrada 	Exemplo de Saída

a+(b*c)-2-a 
(a+b*(2-c)-2+a)*2 
(a*b-(2+c) 
2*(3-a))  
)3+b*(2-c)( 
	

correct
correct
incorrect
incorrect
incorrect 
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

lines.forEach(str => {
    let saldo = 0;
    let estaCorreto = true;

    for (let caracter of str) {
        if (caracter === '(') {
            saldo++; // Incrementa para cada '('
        } else if (caracter === ')') {
            saldo--; // Decrementa para cada ')'
        }
        
        // Se o balance ficar negativo, temos um ')' sem '(' correspondente
        if (saldo < 0) {
            estaCorreto = false;
            break; // Não precisa verificar o restante
        }
    }

    // Verifica se o balance final é zero
    if (estaCorreto && saldo === 0) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});
