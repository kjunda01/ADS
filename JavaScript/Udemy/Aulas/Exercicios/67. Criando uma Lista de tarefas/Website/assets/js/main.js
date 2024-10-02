/*
const botaoAdicionarTarefa = document.querySelector(".btnAddTarefa");
const textoNovaTarefa = document.querySelector(".inputText");
const btnApagar = document.querySelector(".btnApagar");
const div = document.querySelector(".itens");

function limpaTarefa() {
    textoNovaTarefa.value = " ";
    textoNovaTarefa.focus();
}

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
    botao.setAttribute('title', 'Apagar esta tarefa');
    paragrafo.appendChild(botao);
}

textoNovaTarefa.addEventListener("keypress", function (e) {
    let texto = textoNovaTarefa.value;
    if (e.key === "Enter") {
        createNewInput(texto);
        limpaTarefa();
    }
    if (!texto === "") {
        alert("Texto não pode ser vazio!");
    }
});

// Capta todos os cliques da tela
document.addEventListener("click", function (e) {
    const elementoClicado = e.target;
    let texto = textoNovaTarefa.value;

    // acrescenta o item na lista quando clicado em adicionar tarefa
    if (elementoClicado === botaoAdicionarTarefa) {
        if (texto) {
            createNewInput(texto);
            limpaTarefa();
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
*/
const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Apagar esta tarefa");
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener("click", function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
