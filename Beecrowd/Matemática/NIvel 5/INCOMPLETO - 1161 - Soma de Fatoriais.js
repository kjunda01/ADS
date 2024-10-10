/*
 beecrowd | 1161
Soma de Fatoriais

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia dois valores inteiros M e N indefinidamente. A cada leitura, calcule e escreva a soma dos fatoriais de cada um dos valores lidos. Utilize uma variável apropriada, pois cálculo pode resultar em um valor com mais de 15 dígitos.
Entrada

O arquivo de entrada contém vários casos de teste. Cada caso contém dois números inteiros M (0 ≤ M ≤ 20) e N (0 ≤ N ≤ 20). O fim da entrada é determinado por eof.
Saída

Para cada caso de teste de entrada, seu programa deve imprimir uma única linha, contendo um número que é a soma de ambos os fatoriais (de M e N).
Exemplo de Entrada 	Exemplo de Saída

4 4
0 0
0 2
	

48
2
3 
*/
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split(/\r?\n/);

function fatorial(linha) {
    const fat1 = parseInt(linha[0]);
    const fat2 = parseInt(linha[1]);

    function calculaFatorial(numero) {
        let numeroAtual = numero;
        let fat = 0;
        while (numeroAtual >= 2) {
            // AQUI QUE TEM QUE SER FEITO O CÁLCULO DO FATORIAL
            fat += numeroAtual * (numeroAtual - 1);

            numeroAtual--;
        }
        return fat;
    }

    return calculaFatorial(fat1);
}

for (let i in lines) {
    // vai mandar a linha para a função
    const num = lines[i].split(" ");
    console.log(fatorial(num));
}

// for (i in linha){
//     let numeroAtual = linha[i];
//     let fat = numeroAtual;
//     fat = numeroAtual * (numeroAtual - 1);
//     if (fat === 0) return 1;
//     return fat;
// }
