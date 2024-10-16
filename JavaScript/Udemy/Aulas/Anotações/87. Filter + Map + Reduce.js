// FILTER, MAP, REDUCE

// retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros
    .filter((valor) => valor % 2 === 0)
    .map((valor) => valor * 2)
    .reduce((i, valor) => i + valor);

console.log(resultado);
