/*

beecrowd | 5722
Reverta String em Node.js
Por Luccas,  Brazil

Timelimit: 10
Descrição do Problema:
Implemente uma função chamada reverteString em JavaScript (Node.js) que aceita uma string como argumento e retorna a mesma string com seus caracteres invertidos.

Detalhes:
A string pode conter letras maiúsculas e minúsculas.
Não haverá espaços ou caracteres especiais na string.
O tamanho da string será de no máximo 1000 caracteres.

Entrada:
O programa deve ler uma linha de texto, que representa a string a ser invertida.
A string não conterá espaços, apenas letras (maiúsculas e minúsculas).

Saída:
O programa deve imprimir a string invertida.
Samples Input	Samples Output
hello

olleh

Strings, JavaScript, Node.js, Manipulação de Texto.

*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n')[0];

const reverteString = (palavra) => {
  let stringInvertida = '';

  for (let i = palavra.length - 1; i >= 0; i--) {
    stringInvertida += palavra[i];
  }
  return stringInvertida;
};

console.log(reverteString(lines));
