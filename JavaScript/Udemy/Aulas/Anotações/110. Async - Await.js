const rand = (min = 1000, max = 3000) =>
    Math.floor(Math.random() * (max - min) + min);

async function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject("IXE, DEU ERRO!");
                return;
            }

            resolve(msg.toUpperCase() + " - passei na promise");
            return;
        }, tempo);
    });
}

async function executa() {
    try {
        const fase1 = esperaAi("Fase 1", rand());
        console.log(fase1);

        const fase2 = await esperaAi("Fase 2", rand());
        console.log(fase2);

        const fase3 = await esperaAi("Fase 3", rand());
        console.log(fase3);

        console.log("Terminamos na ", fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

// async vai permitir que utilizemos a palavra await dentro de uma função para esperar a promise ser finalizada
// As promises tem tres estados:

// { <pending> } (pendente) -> Quando manda executar
// {<fullfilled>} (resolvida) -> quando a promise ja está resolvida
// {<rejected>} (rejeitada) -> quando a promise é rejeitada
