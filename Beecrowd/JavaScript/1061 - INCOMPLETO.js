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
//var input = require("fs").readFileSync("stdin", "utf8").trim();
//var lines = input.split("\n");
lines = ["Dia 5", "08 : 12 : 23", "Dia 9", "06 : 13 : 23"];

/*
const data = new Date();

console.log(data);
console.log();
console.log(data.toString());
console.log();
console.log(data.toDateString());
console.log();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);
*/

const diaInicial = lines[0].trim().split(" ")[1];
const horaInicial = 
const diaFinal = lines[2].trim().split(" ")[1];