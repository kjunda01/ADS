/*
beecrowd | 1276
Faixa de Letras
Por TopCoder*  EUA

Timelimit: 1
Uma faixa de letras é um conjunto de letras minúsculas alfabeticamente consecutivas tomadas de 'a' até 'z'. A menor e maior letras da faixa, separadas por dois pontos (o caractere ':'), são usadas para representar a faixa de letras. Por exemplo, a faixa "a:c" representa as letras consecutivas 'a', 'b' e 'c'. (as aspas não fazem parte da faixa). A faixa "w:z" representa as letras 'w', 'x', 'y' e 'z'. A faixa "m:m" representa apenas a letra 'm'.

Entrada
Cada linha de entrada é um caso de teste. Cada caso de teste contém uma string, que pode ser vazia e cujas letras podem não estar em ordem alfabética, de letras minúsculas (a-z) e espaços.

A string conterá entre 0 e 50 caracteres, inclusive.

Saída
Para cada caso de teste de entrada, seu programa deverá imprimir as faixas de letras ordenadas alfabeticamente pelo menor valor de cada faixa. Faixas de letras a serem impressas devem representar a maior sequencia possível de letras de entrada em ordem crescente. Ignore espaços e letras duplicadas contidas na entrada.


Se a string for vazia, apenas imprima uma nova linha.


Por exemplo, a string "fb xee ac" tem três faixas de letras, "a:c" (as letras 'a', 'b' e 'c'), "e:f" (as letras 'e' e 'f') e "x:x" (a letra 'x'). Por favor, recorra aos exemplos.

Exemplo de Entrada	Exemplo de Saída
aha
xyzzy
quick brown fox jumps over the lazy dog
fbxeac
  x
 b z a x c y
bdfhjlnprtvxz

az def

a:a, h:h
x:z
a:z
a:c, e:f, x:x
x:x
a:c, x:z
b:b, d:d, f:f, h:h, j:j, l:l, n:n, p:p, r:r, t:t, v:v, x:x, z:z

a:a, d:f, z:z

* Este problema é de autoria do TopCoder (www.topcoder.com/tc) e foi adaptado por Julio B. Silva para utilização (autorizada) no URI OJ.
* A reprodução não autorizada deste problema sem o consentimento por escrito de TopCoder, Inc. é estritamente proibida.
*/
function processaLinha(linha){
    if (!linha){
        console.log();
        return;
    }

    // PULO DO GATO NUMERO 1 - LINHA TIRA ESPAÇO, REMOVE DUPLICADOS E ORDENA
    let letras = Array.from(new Set(linha.replace(/\s+/g, "").split("").sort()));
    let intervalo = [];
    let inicio = letras[0];
    let fim = letras[0];

    for (let i = 1;i<letras.length;i++){
        if (letras[i].charCodeAt(0) === fim.charCodeAt(0) + 1){
            fim = letras[i];
        }else{
            intervalo.push(inicio === fim ? `${inicio}:${inicio}` : `${inicio}:${fim}`);
            inicio = letras[i];
            fim = inicio;
        }
    } 

    intervalo.push(inicio === fim ? `${inicio}:${inicio}` : `${inicio}:${fim}`);
    console.log(intervalo.join(", "));
}

var input = require('fs').readFileSync('stdin', 'utf8').trim().split("\n");

for (let linha of input){
    processaLinha(linha)
}
