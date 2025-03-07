/*
beecrowd | 5726
Encontre Substring
Por Encontre Substring,  Brazil

Timelimit: 10
Encontre Substring
Implemente uma função chamada encontreSubstring que aceita uma string s e uma lista de palavras words como argumentos.
A função deve retornar todas as posições iniciais na string s onde uma substring formada pela concatenação de todos os elementos da lista words ocorre.
As palavras na lista words podem aparecer em qualquer ordem e não devem se sobrepor na string s.
Exemplo:
Entrada: 

barfoothefoobarman  

foo, bar 

Saída:

[0,9]

Samples Input	Samples Output
barfoothefoobarman
foo, bar

[0, 9]


*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const s = lines[0];
const words = lines[1].split(', ');

const encontreSubstring = (s, words) => {
  const contarPalavra = words.length;
  const tamanhoDaPalavra = words[0].length;
  const tamanhoTotal = contarPalavra * tamanhoDaPalavra;
  const resposta = [];

  // Mapa para contar a frequência das palavras
  const wordMap = {};
  for (const palavra of words) {
    if (wordMap[palavra]) {
      wordMap[palavra]++;
    } else {
      wordMap[palavra] = 1;
    }
  }

  // Percorre a string s
  for (let i = 0; i <= s.length - tamanhoTotal; i++) {
    const jaVisto = {};
    let j = 0;

    // Verifica cada palavra na substring
    while (j < contarPalavra) {
      const indiceDaPalavra = i + j * tamanhoDaPalavra;
      const word = s.substring(
        indiceDaPalavra,
        indiceDaPalavra + tamanhoDaPalavra,
      );

      // Se a palavra não está na lista, sai do loop
      if (!wordMap[word]) {
        break;
      }

      // Contar a palavra encontrada
      if (jaVisto[word]) {
        jaVisto[word]++;
      } else {
        jaVisto[word] = 1;
      }

      // Se a contagem de palavras exceder a contagem no mapa, sair do loop
      if (jaVisto[word] > wordMap[word]) {
        break;
      }

      j++;
    }

    // Se todas as palavras foram encontradas
    if (j === contarPalavra) {
      resposta.push(i);
    }
  }

  return resposta;
};

console.log(`[${encontreSubstring(s, words).join(',')}]`);
