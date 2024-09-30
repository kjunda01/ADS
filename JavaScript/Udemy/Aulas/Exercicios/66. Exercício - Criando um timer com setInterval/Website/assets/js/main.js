const select_btnIniciar = document.querySelector("#btnIniciar");
const select_btnPausar = document.querySelector("#btnPausar");
const select_btnResetar = document.querySelector("#btnResetar");
const select_timer = document.querySelector(".timer");

let IDIntervalo;
let tempo = new Date(0);
let ms = 1

function timer(ms = 1) {
    tempo.setMilliseconds(ms * 1000);
    return tempo.toLocaleTimeString("pt-BR", { timeZone: "UTC" });
}

function iniciaTimer() {
    if (!IDIntervalo) {
        IDIntervalo = setInterval((select_timer.innerHTML = timer(ms)), 1000);
    }
}

function pausarTimer() {
    clearInterval(IDIntervalo);
    IDIntervalo = null;
}

function zerarTimer() {
    const zerarTempo = new Date(0);
    return (select_timer.innerHTML = zerarTempo.toLocaleTimeString("pt-BR", {
        timeZone: "UTC",
    }));
}

select_btnIniciar.addEventListener("click", function (event) {
    console.log("clicou no Iniciar");
    iniciaTimer();
});

select_btnPausar.addEventListener("click", function (event) {
    console.log("clicou no Pausar");
    pausarTimer();
});

select_btnResetar.addEventListener("click", function (event) {
    console.log("clicou no Resetar");
    console.clear()
    zerarTimer();
});
