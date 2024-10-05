// Parâmetros das funções

/*
function funcao() {
    console.log('Oi')
}

funcao()


// argumentos que sustentam todos os argumentos válidos
/*
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7);


function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);
*/

const conta = (...args) => {
    console.log(args);
};
conta("+", 1, 20, 30, 40, 50);
