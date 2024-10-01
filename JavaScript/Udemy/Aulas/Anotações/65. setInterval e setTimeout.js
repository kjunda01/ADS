// try {
//     console.log("Abri um arquivo");
//     console.log("Manipulei o arquivo e gerou erro");
//     console.log("Fechei o arquivo");
// } catch (e) {
//     console.log("Tratando o erro");
// } finally {
//     console.log('Eu sempre sou executado')
// }

function mostraHora() {
    const data = new Date();
    const dia = data.toLocaleDateString("pt-BR");
    const horario = data.toLocaleTimeString("pt-BR");
    return dia + " às " + horario;
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log("Olá, mundo!");
}, 5000);
