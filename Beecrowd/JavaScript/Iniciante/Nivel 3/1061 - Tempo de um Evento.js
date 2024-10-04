// var input = require("fs").readFileSync("stdin", "utf8").trim();
// var lines = input.split("\n");


const lines = ["Dia 5", "08 : 12 : 23", "Dia 9", "06 : 13 : 23"];

const [diaInicialBruto, horaInicialBruta, diaFinalBruto, horaFinalBruta] = lines;


const diaInicial = parseInt(diaInicialBruto.split(" ")[1]);
const [horaInicial, minutoInicial, segundoInicial] = horaInicialBruta.split(" : ").map(Number);
const diaFinal = parseInt(diaFinalBruto.split(" ")[1]);
const [horaFinal, minutoFinal, segundoFinal] = horaFinalBruta.split(" : ").map(Number);


const segundosIniciais = (diaInicial * 24 * 3600) + (horaInicial * 3600) + (minutoInicial * 60) + segundoInicial;
const segundosFinais = (diaFinal * 24 * 3600) + (horaFinal * 3600) + (minutoFinal * 60) + segundoFinal;


let duracaoEmSegundos = segundosFinais - segundosIniciais;


if (duracaoEmSegundos < 0) {
    duracaoEmSegundos += 30 * 24 * 3600; 
}


const dias = Math.floor(duracaoEmSegundos / (24 * 3600));
duracaoEmSegundos %= (24 * 3600);
const horas = Math.floor(duracaoEmSegundos / 3600);
duracaoEmSegundos %= 3600;
const minutos = Math.floor(duracaoEmSegundos / 60);
const segundos = duracaoEmSegundos % 60;


console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
