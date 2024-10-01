// Objeto Date

// const data = new Date();

// console.log(data);
// const completa = data.toString().split(" ");

// for (i in completa) {
//     console.log(completa[i]);
// }

const data = new Date();

console.log(data);
console.log();
console.log(data.toString());
console.log();
console.log(data.toDateString());
console.log();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);
