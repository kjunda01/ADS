function processarLista(lista) {
    // Filtra apenas os números ímpares
    let impares = lista.filter(num => num % 2 !== 0);

    // Ordena os números ímpares em ordem decrescente (maiores primeiro)
    let decrescente = [...impares].sort((a, b) => b - a);
    // Ordena os números ímpares em ordem crescente (menores primeiro)
    let crescente = [...impares].sort((a, b) => a - b);

    // Monta a lista alternada
    let resultado = [];
    let tamanho = decrescente.length;
    for (let i = 0; i < tamanho; i++) {
        if (i % 2 === 0) {
            resultado.push(decrescente[Math.floor(i / 2)]); // Maiores
        } else {
            resultado.push(crescente[Math.floor(i / 2)]); // Menores
        }
    }

    return resultado;
}

// Função principal para processar os casos de teste
function laercioJogo(input) {
    let linhas = input.trim().split('\n').filter(linha => linha.trim() !== '');

    let numCasos = parseInt(linhas[0]);
    let linhaAtual = 1;

    for (let i = 0; i < numCasos; i++) {
        let tamanhoLista = parseInt(linhas[linhaAtual]);
        let lista = linhas[linhaAtual + 1].split(' ').map(Number);

        let resultado = processarLista(lista);

        console.log(resultado.join(' '));

        // Avança para o próximo caso de teste (2 linhas para cada caso: 1 para M e outra para a lista)
        linhaAtual += 2;
    }
}

var input = require('fs').readFileSync('stdin', 'utf8');
laercioJogo(input);
