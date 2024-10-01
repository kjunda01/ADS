const botaoAdicionarTarefa = document.querySelector(".btnAddTarefa");
const textoNovaTarefa = document.querySelector(".inputText");
const btnApagar = document.querySelector(".btnApagar");
const div = document.querySelector(".itens");

function createNewInput(msg) {
    // Cria o parágrafo
    const lista = document.createElement("li");
    const nodeTxt = document.createTextNode(msg);
    lista.appendChild(nodeTxt);
    lista.classList.add("itemDaLista");
    //let div = document.querySelector(".itens");
    let paragrafo = div.appendChild(lista);

    // Cria o botão dentro do parágrafo
    const botao = document.createElement("button");
    const nodeBtn = document.createTextNode("Apagar");
    botao.appendChild(nodeBtn);
    botao.classList.add("btnApagar");
    paragrafo.appendChild(botao);
}

document.addEventListener("click", function (e) {
    const elementoClicado = e.target;
    let texto = textoNovaTarefa.value;

    console.log(elementoClicado);

    if (elementoClicado === botaoAdicionarTarefa) {
        if (texto) {
            createNewInput(texto);

            // Falta limpar o campo do texto
        } else {
            alert("Texto não pode ser vazio!");
        }
    }

    if (elementoClicado === btnApagar) {
        div.removeChild('itemDaLista');
    }

    //    select_txtMarcacoes.innerHTML += `Marcação ${numeroMarcacao}: ${criaHoraDosSegundos(
    //       segundos
    //    )}</br>`;
});
