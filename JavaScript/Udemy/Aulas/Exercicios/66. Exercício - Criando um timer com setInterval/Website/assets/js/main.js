const select_btnIniciar = document.querySelector("#btnIniciar");
const select_btnPausar = document.querySelector("#btnPausar");
const select_btnResetar = document.querySelector("#btnResetar");
const select_btnMarcar = document.querySelector("#btnMarcar");
const select_txtMarcacoes = document.querySelector(".marcacoes");
const select_timer = document.querySelector(".timer");

let segundos = 0;
let numeroMarcacao = 1;
let timer;

function criaHoraDosSegundos(segundos) {
    let hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

function iniciarTimer() {
    timer = setInterval(function () {
        segundos++;
        select_timer.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

function limpaTimer() {
    return clearInterval(timer);
}

function coresDoTimer(cor) {
    const cores = ["normal", "pausado", "zerado"];
    for (i of cores) {
        select_timer.classList.remove(i);
    }
    select_timer.classList.add(cor);
}

document.addEventListener("click", function (e) {
    const elementoClicado = e.target;

    if (elementoClicado === select_btnIniciar) {
        coresDoTimer("normal");
        limpaTimer();
        iniciarTimer();
    }

    if (elementoClicado === select_btnPausar) {
        coresDoTimer("pausado");
        limpaTimer();
    }

    if (elementoClicado === select_btnResetar) {
        let resposta = confirm("Deseja resetar?");
        if (resposta) {
            coresDoTimer("zerado");
            //console.clear();
            limpaTimer();
            select_timer.innerHTML = "00:00:00";
            select_txtMarcacoes.innerHTML = "";
            segundos = 0;
            numeroMarcacao = 1;
        }
    }

    if (elementoClicado === select_btnMarcar) {
        select_txtMarcacoes.innerHTML += `Marcação ${numeroMarcacao}: ${criaHoraDosSegundos(
            segundos
        )}</br>`;
        numeroMarcacao++;
    }
});
