// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const numeros = [1, 100, 5];
const [numeroInicial, numeroFinal, alvo] = numeros;

console.log(numeroInicial);
console.log(numeroFinal);
console.log(alvo);

function busca_binaria(inicio, fim, alvo) {
    const meio = Math.floor((inicio + fim) / 2);

    if (alvo < inicio || alvo > fim) {
        return `Número ${alvo} não encontrado.`;
    }
    contador = 0;
    while (inicio <= fim) {
        console.log(`passou aqui ${contador} vezes.`);
        contador++;
        
        if (alvo > meio) {
            inicio = meio + 1;
        } else if (alvo < meio) {
            fim = meio - 1;
        } else {
            return true;
        }
    }
}

if (busca_binaria(numeroInicial, numeroFinal, alvo)) {
    console.log(busca_binaria(numeroInicial, numeroFinal, alvo));
} else {
    console.log(busca_binaria(numeroInicial, numeroFinal, alvo));
}
