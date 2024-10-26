const min = 500;
const max = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

async function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject(new Error("IXE, DEU ERRO!"));
                return;
            }

            resolve(msg.toUpperCase() + " - passei na promise");
            return;
        }, tempo);
    });
}

const promises = [
    //esperaAi(1000, rand(min, max)),
    esperaAi("Promise 1", rand(min, max)),
    esperaAi("Promise 2", rand(min, max)),
    esperaAi("Promise 3", rand(min, max)),
];


// Promise.all - resolve todas as promises e depois entrega
Promise.all(promises)
    .then((valor) => console.log(valor))
    .catch((erro) => console.log(erro));


// Promise.race - A primeira promise resolvida é a que ele entrega
Promise.race(promises)
    .then((valor) => console.log(valor))
    .catch((erro) => console.log(erro));


// Promise.resolve - já entrega a promise resolvida
// Promise.reject - Já rejeita diretamente a promise
function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve("RESOLVE - Pagina em cache");
    } else if (!emCache) {
        return Promise.reject("REJECT - Pagina em cache");
    } else {
        return esperaAi(
            `Baixei a página em ${rand(min, max) / 1000}s`,
            rand(min, max)
        );
    }
}

baixaPagina()
    .then((dadosPagina) => console.log(dadosPagina))
    .catch((erro) => console.log("ERRRRRRO", erro));

