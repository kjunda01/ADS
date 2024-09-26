const numeros = [1, 100, 42];
const [numeroInicial, numeroFinal, alvo] = numeros;

console.log(numeroInicial);
console.log(numeroFinal);
console.log(alvo);

function busca_binaria(inicio, fim, alvo) {
    if (alvo < inicio || alvo > fim) {
        return false;
    }

    passo = 1;
    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        console.log(
            `Passo ${passo}: Intervalo [${inicio}, ${fim}], Meio=${meio}`
        );
        passo++;

        if (alvo === meio) {
            return true;
        } else if (alvo > meio) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
}

if (busca_binaria(numeroInicial, numeroFinal, alvo)) {
    console.log(console.log(`Número ${alvo} encontrado.`));
} else {
    console.log(`Número ${alvo} não encontrado.`);
}
