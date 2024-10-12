/*
 beecrowd | 1117
Validação de Nota

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.
Entrada

A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem lidas duas notas válidas.
Saída

Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.
Exemplo de Entrada 	Exemplo de Saída

-3.5
3.5
11.0
10.0
	

nota invalida
nota invalida
media = 6.75

Agradecimentos a Cássio F.
*/
var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(/\r?\n/);

// Cria uma lista vazia para justar os dois numeros para a media
let filaMedia = [];

// percorre por todas as linhas
lines.forEach((element) => {
    // transforma os 'numeros' em float
    element = parseFloat(element);

    // se for um numero valido...
    if (element >= 0 && element <= 10) {

        // adiciona o numero a fila
        filaMedia.push(element);

        // verifica se tem dois numeros na fila
        if (filaMedia.length == 2) {

            // calcula a media
            const media = (filaMedia[0] + filaMedia[1]) / 2;

            //mostra no console a media
            console.log(`media = ${media.toFixed(2)}`);

            // limpa a fila para verificar apenas os dois próximos
            //filaMedia = [];

            // sai do programa quando encontrar duas notas validas
            process.exit();
        }
    } else {
        console.log("nota invalida");
    }
});
