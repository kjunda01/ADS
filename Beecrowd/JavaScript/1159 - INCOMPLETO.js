/*
 beecrowd | 1159
Soma de Pares Consecutivos

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

O programa deve ler um valor inteiro X indefinidas vezes. (O programa irá parar quando o valor de X for igual a 0). Para cada X lido, imprima a soma dos 5 pares consecutivos a partir de X, inclusive o X , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.
Entrada

O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.
Saída

Imprima a saida conforme a explicação acima e o exemplo abaixo.
Exemplo de Entrada 	Exemplo de Saída

4
11
0
	

40
80 
*/

//var input = require("fs").readFileSync("stdin", "utf8").trim().split("\n");
var input = `
4
11
0
`
    .trim()
    .split("\n");

let parar = 0;
let paresConsecutivos = 5;
let numeroAtual;
let primeiroPar;
let soma = [];
let par = [];
let impar = [];

for (let numeroAtual of input) {
    numeroAtual = Number(numeroAtual);
    if (Number(numeroAtual) === parar) break;
    else {
        // aqui começa o programa

        console.log();

        console.log(`Passou aqui com o número: ${Number(numeroAtual)}`);

        if (Number(numeroAtual) % 2 === 0){
            for (let j = 0; j < paresConsecutivos; j++) {
                console.log(`PAR. Passou aqui com o número: ${numeroAtual}, ${j + 1} vez(es).`);
                par.push(Number(numeroAtual));
                
            }
        }else if (Number(numeroAtual) % 2 !== 0){
            numeroAtual = numeroAtual + 1
            for (let j = 0; j < paresConsecutivos; j++) {
                console.log(`IMPAR. Passou aqui com o número: ${numeroAtual}, ${j + 1} vez(es).`);
                impar.push(numeroAtual += 2);
                
            }
        }
        
    }
}

console.log();

for (let imprimirPar in par){
    console.log(par);

}

console.log();

for (let imprimirImpar in impar){
    console.log(impar);
}

console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
console.log([].reduce((a, b) => a + b, 0));
