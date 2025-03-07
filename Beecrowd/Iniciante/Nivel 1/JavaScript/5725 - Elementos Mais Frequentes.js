/*
beecrowd | 5725
Elementos Mais Frequentes
Por Luccas,  Brazil

Timelimit: 10
Descrição: Implemente uma função chamada elementosMaisFrequentes que aceita um array de números inteiros e um número inteiro k como argumentos. A função deve retornar um array contendo os k elementos mais frequentes do array de entrada, em ordem decrescente de frequência.

Se houver mais de k elementos com a mesma frequência máxima, retorne os k elementos na ordem em que eles foram inseridos.


Entrada:
A primeira linha contém n números inteiros separados por espaço, representando os elementos do array.
A segunda linha contém um número inteiro k (1 ≤ k ≤ n), representando a quantidade de elementos mais frequentes a serem retornados.

Saída:
Um array contendo os k elementos mais frequentes em ordem decrescente de frequência.
Se houver empate na frequência, mantenha a ordem de inserção dos elementos.


Samples Input	Samples Output
1 1 2 2 3
2

[1,2]
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var linhas = input.trim().split('\n');

const arrayDeInt = linhas[0].split(' ').map(Number);
const numIntK = Number(linhas[1]);

function elementosMaisFrequentes(arrayDeInt, numIntK) {
  // Conta as frequências
  let contador = {};
  for (let num of arrayDeInt) {
    contador[num] = (contador[num] || 0) + 1;
  }

  // Guarda os números na ordem de inserção com suas frequências
  let ordemOriginal = [];
  let jaVistos = new Set();
  for (let num of arrayDeInt) {
    if (!jaVistos.has(num)) {
      ordemOriginal.push([num, contador[num]]);
      jaVistos.add(num);
    }
  }

  // Ordena por frequência decrescente, mantendo ordem de inserção em empate
  ordemOriginal.sort((a, b) => b[1] - a[1]); // Apenas ordena por frequência decrescente

  // Pega os k primeiros
  let resultado = ordemOriginal.slice(0, numIntK).map((par) => par[0]);

  // resposta
  return `[${resultado.join(',')}]`;
}

console.log(elementosMaisFrequentes(arrayDeInt, numIntK));
