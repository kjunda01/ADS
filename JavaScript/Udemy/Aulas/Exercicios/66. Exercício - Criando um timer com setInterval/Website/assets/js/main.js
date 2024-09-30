const select_btnIniciar = document.querySelector("#btnIniciar");
const select_btnPausar = document.querySelector("#btnPausar");
const select_btnResetar = document.querySelector("#btnResetar");
const select_timer = document.querySelector(".timer");

let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
    let hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

function iniciarTimer() {
    timer = setInterval(function () {
        segundos++;
        select_timer.innerHTML = criaHoraDosSegundos(segundos);
    }, 100);
}

select_btnIniciar.addEventListener("click", function (event) {
    select_timer.classList.remove('pausado');
    select_timer.classList.add('normal');
    console.log("Clicou no Iniciar");
    clearInterval(timer);
    iniciarTimer();
});

select_btnPausar.addEventListener("click", function (event) {
    console.log("Clicou no Pausar");
    clearInterval(timer);
    select_timer.classList.remove('zerado');
    select_timer.classList.remove('normal');
    select_timer.classList.add('pausado');
});

select_btnResetar.addEventListener("click", function (event) {
    console.log("Clicou no Resetar");
    console.clear();
    clearInterval(timer);
    select_timer.innerHTML = "00:00:00";
    segundos = 0;
    select_timer.classList.remove('pausado');
    select_timer.classList.remove('normal');
    select_timer.classList.add('zerado');
});
