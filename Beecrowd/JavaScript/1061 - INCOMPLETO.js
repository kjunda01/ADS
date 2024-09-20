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

let A = lines[0];
let B = lines[1];
let C = lines[2];
let D = lines[3];

let dias = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;
let saldoDias = 0;

let diaInicial = parseInt(A.slice(4, 6));
let diaFinal = parseInt(C.slice(4, 6));

let horaInicial = parseInt(B.slice(0, 2));
let minutoInicial = parseInt(B.slice(5, 7));
let segundoInicial = parseInt(B.slice(10, 12));

let horaFinal = parseInt(D.slice(0, 2));
let minutoFinal = parseInt(D.slice(5, 7));
let segundoFinal = parseInt(D.slice(10, 12));

if (segundoInicial === segundoFinal) {
    segundos = 0;
} else {
    if (segundoFinal > segundoInicial) {
        segundos = segundoFinal - segundoInicial;
    } else {
        segundos = 60 - segundoInicial + segundoFinal;
    }
}

if (minutoInicial === minutoFinal) {
    minutos = 0;
} else {
    if (minutoFinal > minutoInicial) {
        minutos = minutoFinal - minutoInicial;
    } else {
        minutos = 60 - minutoInicial + minutoFinal;
    }
}

if (horaInicial === horaFinal) {
    horas = 0;
} else {
    if (horaFinal > horaInicial) {
        horas = horaFinal - horaInicial;
    } else {
        horas = 24 - horaInicial + horaFinal;
    }
}

if (diaInicial === diaFinal) {
    dias = 0;
} else {
    if (diaFinal > diaInicial) {
        dias = diaFinal - diaInicial + saldoDias;
    } else {
        dias = 30 - diaInicial + diaFinal;
    }
}

console.log(`${dias} dia(s)
${horas} hora(s)
${minutos} minuto(s)
${segundos} segundo(s)`);
