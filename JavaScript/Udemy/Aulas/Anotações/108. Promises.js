const min = 500;
const max = 1000;

const tempoAleatorio = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

async function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject(new Error("ERRO, BAD VALUE!"));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi("Conectando com a DATABASE", tempoAleatorio(min, max))
    .then((resposta) => {
        console.log(resposta);
        return esperaAi(
            "Conexão realizada com sucesso.",
            tempoAleatorio(min, max)
        );
    })
    .then((resposta) => {
        console.log(resposta);
        return esperaAi(22222, tempoAleatorio(min, max));
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(() => {
        console.log("Dados encontrados!");
    })
    .catch((erro) => {
        console.log("ERROR", erro);
    });

console.log("Isso aqui será exibido antes de qualquer promisse.");
