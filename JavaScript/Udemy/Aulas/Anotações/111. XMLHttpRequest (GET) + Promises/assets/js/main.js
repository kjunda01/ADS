// Função principal que faz a requisição HTTP usando Promises
const request = (objeto) => {
    return new Promise((resolve, reject) => {
        // Cria uma nova instância de XMLHttpRequest para fazer a requisição
        const xhr = new XMLHttpRequest();

        // Configura o tipo de requisição e a URL baseados no objeto passado (GET ou POST, URL destino)
        xhr.open(objeto.method, objeto.url, true);

        // Envia a requisição HTTP
        xhr.send();

        // Aguarda a resposta da requisição e lida com o resultado
        xhr.addEventListener("load", () => {
            // Verifica se o status da resposta está entre 200 e 299 (status de sucesso)
            const resposta =
                xhr.status >= 200 && xhr.status < 300
                    ? resolve(xhr.responseText) // Se sucesso, resolve a Promise com o texto da resposta
                    : reject(xhr.statusText); // Se erro, rejeita a Promise com o status do erro
        });
    });
};

// Adiciona um evento de clique ao documento inteiro
document.addEventListener("click", (evento) => {
    // Captura o elemento que foi clicado
    const elemento = evento.target;
    // Captura a tag do elemento e converte para minúsculas
    const tag = elemento.tagName.toLowerCase();

    // Verifica se o elemento clicado é uma tag <a>
    if (tag === "a") {
        // Previne o comportamento padrão do link (não navega para a URL diretamente)
        evento.preventDefault();
        // Chama a função para carregar a página do link clicado
        carregaPagina(elemento);
    }
});

// Função assíncrona para carregar o conteúdo da página do link clicado
async function carregaPagina(elemento) {
    // Pega o atributo "href" do link clicado (a URL para a qual ele aponta)
    const href = elemento.getAttribute("href");

    // Define a configuração do objeto de requisição para o método "request"
    const objConfig = {
        method: "GET",
        url: href,
    };

    try {
        // Chama a função request passando a configuração e aguarda a resposta
        const response = await request(objConfig);
        // Se sucesso, carrega o conteúdo da resposta na página
        carregaResultado(response);
    } catch (erro) {
        // Em caso de erro, exibe o erro no console
        console.log(erro);
    }
}

// Função para inserir o conteúdo da resposta no elemento HTML
function carregaResultado(response) {
    // Seleciona o elemento com a classe "resultado"
    const resultado = document.querySelector(".resultado");
    // Define o conteúdo HTML desse elemento com a resposta obtida
    resultado.innerHTML = response;
}
