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
    let paragrafo = div.appendChild(lista);

    // Cria o botão dentro do parágrafo
    const botao = document.createElement("button");
    const nodeBtn = document.createTextNode("Apagar");
    botao.appendChild(nodeBtn);
    botao.classList.add("btnApagar");
    paragrafo.appendChild(botao);
}

// Capta todos os cliques da tela
document.addEventListener("click", function (e) {
    const elementoClicado = e.target;
    let texto = textoNovaTarefa.value;

    // acrescenta o item na lista quando clicado em adicionar tarefa
    if (elementoClicado === botaoAdicionarTarefa) {
        if (texto) {
            createNewInput(texto);
            textoNovaTarefa.value = ""; // Limpa o campo de texto
            // Falta limpar o campo do texto
        } else {
            alert("Texto não pode ser vazio!");
        }
    }

    // remove o item da lista quando clicado em apagar
    if (elementoClicado.classList.contains("btnApagar")) {
        const itemDaLista = elementoClicado.parentElement; // Obtém o item da lista
        let resposta = confirm("Deseja apagar?");
        if (resposta) {
            div.removeChild(itemDaLista); // Remove o item da lista
        }
    }
});
