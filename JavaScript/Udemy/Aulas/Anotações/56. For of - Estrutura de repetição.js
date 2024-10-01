const nome = ["Luiz", "Otávio", "Henrique"];

//######################
// FOR CLÁSSICO
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

//######################
// FOR IN
for (let i in nome) {
    console.log(nome[i]);
}

//######################
// FOR OF
for (let valor of nome) {
    console.log(valor);
}

//######################
// FOR EACH
nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});
 