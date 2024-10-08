/*
beecrowd | 3145
Uma Jornada Inesperada
Por Samuel Eduardo da Silva, IFSULDEMINAS/UFF BR Brazil

Timelimit: 1
Bilbo Bolseiro vivia numa toca no chão em Vila dos Hobbits. Certo dia, seu amigo Gandalf, lhe convida para uma aventura. A aventura se baseava em roubar o tesouro de um dragão. Bilbo logo achou que seria loucura roubar um dragão, mas Gandalf tinha consigo uma comitiva de anões para ajudá-lo nessa labuta.

Bilbo então decidiu calcular quantos dias eles demorariam para chegar na Montanha Solitária, onde reside atualmente o dragão. Para este cálculo seria necessário dividir a distância em kilômetros de Vila dos Hobbits até a Montanha Solitária pela quantidade de pessoas que vão na aventura (como ele bolou essa métrica? não sei, coisas de hobbit). Vale ressaltar que a quantidade de pessoas é o número de anões somado à 2 (pois Bilbo e Gandalf também vão para a jornada).

Bilbo está muito ocupado preparando os dois cafés da manhã para seus convidados antes de partirem na aventura, e então pediu para você, um hobbit programador muito habilidoso, para que escrevesse um programa para o cálculo pedido acima. Gandalf lhe forneceu uma lista com N nomes que são os anões que vão junto na aventura, e além disso, a distância X até a Montanha Solitária.

Entrada
A única linha da entrada contém 2 inteiros, N e X, indicando respectivamente a quantidade de anões que Gandalf conseguiu para ajudar na aventura e a distância de Vila dos Hobbits até a Montanha Solitária.

Limites:

1 < N <= 100;

1 < X <= 1000.

Saída
Um número real com duas casas decimais indicando a quantidade de dias para chegar na Montanha Solitária.

Exemplos de Entrada	Exemplos de Saída
2 4

1.00

13 1000

66.67

X Olimpíada Interna de Programação do IFSULDEMINAS - OLIP 2020
*/

// dividir a distância em kilômetros de Vila dos Hobbits até a Montanha Solitária
// pela quantidade de pessoas que vão na aventura

// a quantidade de pessoas é o número de anões somado à 2

var input = require('fs').readFileSync('stdin', 'utf8').trim().split(" ");

let numeroDeAnoes = parseFloat(input[0]);
let distanciaEmKm = parseFloat(input[1]);

let pessoasNaAventura = numeroDeAnoes + 2;

console.log((distanciaEmKm / pessoasNaAventura).toFixed(2));
