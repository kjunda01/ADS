// function meuEscopo() {
//     setInterval(() => {
//         const textoSite = document.querySelector(".data");
//         const data = new Date();

//         // function setDataNaTela(texto) {
//         //     return (textoSite.innerHTML = `<h1>${texto}<h1/>`);
//         // }

//         function diaDaSemana(dia) {
//             switch (dia) {
//                 case 0:
//                     dia = "Domingo";
//                     break;
//                 case 1:
//                     dia = "Segunda-feira";
//                     break;
//                 case 2:
//                     dia = "Terça-feira";
//                     break;
//                 case 3:
//                     dia = "Quarta-feira";
//                     break;
//                 case 4:
//                     dia = "Quinta-feira";
//                     break;
//                 case 5:
//                     dia = "Sexta-feira";
//                     break;
//                 case 6:
//                     dia = "Sábado";
//                     break;
//             }
//             return dia;
//         }

//         function obtemMesPorExtenso(mes) {
//             switch (mes) {
//                 case 0:
//                     mes = "janeiro";
//                     break;
//                 case 1:
//                     mes = "fevereiro";
//                     break;
//                 case 2:
//                     mes = "março";
//                     break;
//                 case 3:
//                     mes = "abril";
//                     break;
//                 case 4:
//                     mes = "maio";
//                     break;
//                 case 5:
//                     mes = "junho";
//                     break;
//                 case 6:
//                     mes = "julho";
//                     break;
//                 case 7:
//                     mes = "agosto";
//                     break;
//                 case 8:
//                     mes = "setembro";
//                     break;
//                 case 9:
//                     mes = "outubro";
//                     break;
//                 case 10:
//                     mes = "novembro";
//                     break;
//                 case 11:
//                     mes = "dezembro";
//                     break;
//             }
//             return mes;
//         }

//         function zeroAEquerda(valor) {
//             return valor >= 10 ? valor : `0${valor}`;
//         }

//         const diaSemana = data.getDay();
//         const diaMes = data.getDate();
//         const mes = obtemMesPorExtenso(data.getMonth());

//         textoSite.innerHTML = `<h1>${diaDaSemana(
//             diaSemana
//         )}, ${data.getDate()} de ${mes} de ${data.getFullYear()}</h1>${zeroAEquerda(data.getHours())}:${zeroAEquerda(data.getMinutes())}:${zeroAEquerda(data.getSeconds())}`;
//     }, 1000);
// }
// meuEscopo();

// const textoSite = document.querySelector(".data");
// const data = new Date();

// textoSite.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: "full", timeStyle: "short",});

const textoSite = document.querySelector(".data");
const data = new Date();

function getDiaSemanaTexto(dia) {
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado",];
    return diasSemana[dia];
}

function getNomeMes(mes) {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return meses[mes];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criarData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

textoSite.innerHTML = criarData(data);
