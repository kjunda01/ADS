const select_btnIniciar = document.querySelector("#btnIniciar");
const select_btnPausar = document.querySelector("#btnPausar");
const select_btnResetar = document.querySelector("#btnResetar");
const select_timer = document.querySelector(".timer");

const tempo = new Date(0);
let ms = 1;

function timer(milesegundos = 0) {
    if (tempo.getMilliseconds() > 0){
        tempo.setMilliseconds(0)
    }else {
        tempo.setMilliseconds(milesegundos * 1000);
        const cronometro = tempo.toLocaleTimeString("pt-BR", { timeZone: "UTC" });
        return cronometro;
    }
    
}

function tempoPausado(){
    select_timer.innerHTML = tempo.getMilliseconds()
}

select_btnIniciar.addEventListener("click", function (event) {
    setInterval(function () {
        select_timer.innerHTML = timer(ms);
    }, 100);
});

select_btnPausar.addEventListener("click", function (event) {
    tempoPausado()
});

select_btnResetar.addEventListener("click", function (event) {
    alert("clicou no Resetar");
});

