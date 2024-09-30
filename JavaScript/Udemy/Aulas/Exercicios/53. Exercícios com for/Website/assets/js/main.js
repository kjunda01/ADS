const elementos = [
    { tag: "p", texto: "Iste perferendis repellat. Veritatis, illum quas." },
    { tag: "div", texto: "enim quae optio error accusantium doloremque " },
    {
        tag: "section",
        texto: "Culpa delectus aspernatur sit quasi atque  quia,",
    },
    {
        tag: "footer",
        texto: "Lorem ipsum dolor sit amet consectetur  elit. ",
    },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
