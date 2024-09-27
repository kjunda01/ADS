/*
 beecrowd | 1061
Tempo de um Evento

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.
Entrada

Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.
Saída

Na saída, deve ser apresentada a duração do evento, no seguinte formato:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.
Exemplo de Entrada 	Exemplo de Saída

Dia 5
08 : 12 : 23
Dia 9
06 : 13 : 23
	

3 dia(s)
22 hora(s)
1 minuto(s)
0 segundo(s) 
*/

var input = require("fs").readFileSync("stdin", "utf8").trim();
var lines = input.split("\n");
//lines = ["Dia 5", "08 : 12 : 23", "Dia 9", "06 : 13 : 23"];

const [diaInicialBruto, horaInicialBruta, diaFinalBruto, horaFinalBruta] =
    lines;

let diaInicial = diaInicialBruto.split(" ")[1];
let horaInicial = horaInicialBruta.split(" ")[0];
let minutoInicial = horaInicialBruta.split(" ")[2];
let segundoInicial = horaInicialBruta.split(" ")[4];

let diaFinal = diaFinalBruto.split(" ")[1];
let horaFinal = horaFinalBruta.split(" ")[0];
let minutoFinal = horaFinalBruta.split(" ")[2];
let segundoFinal = horaFinalBruta.split(" ")[4];

// console.log(diaInicial);
// console.log(horaInicial);
// console.log(minutoInicial);
console.log(segundoInicial);
console.log();
// console.log(diaFinal);
// console.log(horaFinal);
// console.log(minutoFinal);
console.log(segundoFinal);

/*
Dia 5
08 : 12 : 23
Dia 9
06 : 13 : 23
*/
let dia = 0,
    hora = 0,
    minuto = 0,
    segundo = 0;

if (segundoInicial > segundoFinal) {
    segundo = 60 - (segundoInicial - segundoFinal);
    minuto += 1
}
if (segundoInicial < segundoFinal) {
    segundo = segundoFinal - segundoInicial;
} else {
    segundo = 0;
}

if (minutoInicial + minuto > minutoFinal + minuto) {
    minuto = 60 - (minutoInicial - minutoFinal);
    hora += 1
}
if (minutoInicial + minuto < minutoFinal + minuto) {
    minuto = minutoFinal - minutoInicial;
} else {
    minuto = 0;
}

if (horaInicial > horaFinal) {
    hora = 60 - (horaInicial - horaFinal);
    hora += 1
}
if (minutoInicial < minutoFinal) {
    minuto = minutoFinal - minutoInicial;
} else {
    minuto = 0;
}


console.log(`${dia} dia(s)
${hora} hora(s)
${minuto} minuto(s)
${segundo} segundo(s) `);
