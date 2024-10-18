var input = require("fs").readFileSync("./dev/stdin", "utf8").trim();
var linha = input.split(/\r?\n/);

// map com arrow functions
// let matriz = linha.map((linha) => {
//     return linha.split(" ").map(Number);
// });

// map com função anonima
let matriz = linha.map(function (linha) {
    return linha.split(" ").map(Number);
});

matriz.forEach(function (elemento) {
    // associação por desestruturação
    let [primeiro, segundo] = elemento;

    // se os dois numeros forem iguais, encerra o programa
    if (primeiro === segundo) {
    } else {
        // continua a lógica para as mensagens
        if (primeiro > segundo) {
            console.log("Decrescente");
        } else if (primeiro < segundo) {
            console.log("Crescente");
        }
    }
});
