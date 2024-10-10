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
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const lines = input.split(/\r?\n/);

// Função para calcular o fatorial de um número usando BigInt
function calculaFatorial(numero) {
    if (numero < 0) return BigInt(0); // Fatorial não é definido para números negativos
    if (numero === 0) return BigInt(1); // Fatorial de 0 é 1

    let fat = BigInt(1); // Inicia como BigInt
    for (let i = BigInt(2); i <= BigInt(numero); i++) {
        fat *= i; // Multiplica usando BigInt
    }

    return fat;
}

// Função para calcular a soma dos fatoriais
function fatorial(linha) {
    const [fat1, fat2] = linha.map(Number); // Converte as entradas para números
    const resultado = calculaFatorial(fat1) + calculaFatorial(fat2);
    return resultado.toString(); // Retorna como string para garantir a formatação correta
}

// Processa cada linha de entrada
lines.forEach(line => {
    const num = line.split(" ");
    // Imprime na tela os resultados
    console.log(fatorial(num));
});

