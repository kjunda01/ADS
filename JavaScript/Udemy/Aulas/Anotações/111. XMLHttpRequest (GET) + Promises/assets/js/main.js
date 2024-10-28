document.addEventListener("click", (evento) => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === "a") {
        evento.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {
    const href = elemento.getAttribute("href");
    const response = await fetch(href);

    if (response.resultado !== 200)
        throw new Error(`ERRO ${response.resultado}`);
    const html = await response.text();

    carregaResultado(html);
}

function carregaResultado(response) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
}
