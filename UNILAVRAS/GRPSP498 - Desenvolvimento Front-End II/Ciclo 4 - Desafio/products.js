// Função para obter os dados dos produtos
async function obterDados() {
    try {
        const response = await fetch("https://dummyjson.com/products"); // URL da API de produtos
        if (!response.ok) {
            throw new Error("Erro ao obter os dados dos produtos");
        }

        const data = await response.json(); // Recebe os dados no formato JSON

        // A chave 'products' contém o array de produtos
        const produtos = data.products; // Acessa o array de produtos

        // Seleciona o container onde os dados serão exibidos
        const produtosContainer = document.querySelector(".todosOsProdutos");

        // Limpa o conteúdo anterior (caso haja algum)
        produtosContainer.innerHTML = "";

        // Cria uma linha para cada produto e adiciona ao container
        produtos.forEach((item) => {
            exibirProduto(item);
        });
    } catch (error) {
        console.error("Erro:", error);
    }
}

// Função para adicionar um novo produto
async function adicionarProduto(produto) {
    try {
        const response = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),
        });

        const data = await response.json();
        console.log("Novo produto adicionado:", data);

        // Exibe um pop-up de sucesso
        alert("Novo produto adicionado com sucesso!");

        // Adiciona o novo produto à lista
        exibirProduto(data);
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
    }
}

// Função para exibir os produtos na página
function exibirProduto(produto) {
    const produtosContainer = document.querySelector(".todosOsProdutos");

    // Cria um item para o produto
    const divItem = document.createElement("div");
    divItem.classList.add("produto");

    // Div para exibir o título, descrição, preço, marca e categoria
    const tituloDescricaoDiv = document.createElement("div");
    tituloDescricaoDiv.classList.add("titulo-descricao");

    // Título e descrição
    const titulo = document.createElement("span");
    titulo.textContent = `${produto.title} - ${produto.description}`;
    tituloDescricaoDiv.appendChild(titulo);

    // Adiciona a div do título e descrição no div principal
    divItem.appendChild(tituloDescricaoDiv);

    // Exibe o preço, marca e categoria
    const detalhesDiv = document.createElement("div");
    detalhesDiv.classList.add("detalhes");

    // Preço
    const preco = document.createElement("span");
    preco.textContent = `Preço: R$ ${produto.price}`;
    detalhesDiv.appendChild(preco);

    // Marca
    const marca = document.createElement("span");
    marca.textContent = `Marca: ${produto.brand}`;
    detalhesDiv.appendChild(marca);

    // Categoria
    const categoria = document.createElement("span");
    categoria.textContent = `Categoria: ${produto.category}`;
    detalhesDiv.appendChild(categoria);

    // Adiciona a div de detalhes no div principal
    divItem.appendChild(detalhesDiv);

    // Cria e insere a imagem
    const img = document.createElement("img");
    img.src = produto.thumbnail || "https://via.placeholder.com/120"; // Imagem do produto ou um placeholder
    img.alt = produto.title;
    divItem.appendChild(img);

    // Adiciona o item à lista de produtos
    produtosContainer.appendChild(divItem);
}

// Função para validar os campos do formulário de produto
function validarCampos(titulo, descricao, preco, marca, categoria, foto) {
    let isValid = true;

    // Limpa as mensagens de erro anteriores
    clearErrors();

    // Validação do título
    if (!titulo || titulo.length < 3 || titulo.length > 100) {
        showError(".tituloProduto", "O título deve ter entre 3 e 100 caracteres.");
        isValid = false;
    }

    // Validação da descrição
    if (!descricao || descricao.length < 10 || descricao.length > 300) {
        showError(".descricaoProduto", "A descrição deve ter entre 10 e 300 caracteres.");
        isValid = false;
    }

    // Validação do preço
    if (!preco || isNaN(preco) || preco <= 0) {
        showError(".precoProduto", "O preço deve ser um número positivo.");
        isValid = false;
    }

    // Validação da marca
    if (!marca || marca.length < 3 || marca.length > 50) {
        showError(".marcaProduto", "A marca deve ter entre 3 e 50 caracteres.");
        isValid = false;
    }

    // Validação da categoria
    if (!categoria || categoria.length < 3 || categoria.length > 50) {
        showError(".categoriaProduto", "A categoria deve ter entre 3 e 50 caracteres.");
        isValid = false;
    }

    // Validação da foto (se fornecida, precisa ser uma URL válida)
    if (foto && !isValidURL(foto)) {
        showError(".fotoProduto", "A URL da foto fornecida não é válida.");
        isValid = false;
    }

    // Se todas as validações passarem
    return isValid;
}

// Função para mostrar uma mensagem de erro abaixo do campo
function showError(selector, message) {
    const field = document.querySelector(selector);
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    field.parentElement.appendChild(error);
}

// Função para limpar as mensagens de erro
function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => error.remove());
}

// Função para verificar se uma URL é válida
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

// Evento de submissão do formulário
document.querySelector(".formNovoProduto").addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = document.querySelector(".tituloProduto").value;
    const descricao = document.querySelector(".descricaoProduto").value;
    const preco = document.querySelector(".precoProduto").value;
    const marca = document.querySelector(".marcaProduto").value;
    const categoria = document.querySelector(".categoriaProduto").value;
    const foto = document.querySelector(".fotoProduto").value;

    // Valida os campos
    if (!validarCampos(titulo, descricao, preco, marca, categoria, foto)) {
        return; // Se algum campo for inválido, não prossegue
    }

    // Cria o novo produto
    const novoProduto = {
        title: titulo,
        description: descricao,
        price: preco,
        brand: marca,
        category: categoria,
        thumbnail: foto || "https://via.placeholder.com/100", // Foto padrão se não for fornecida
    };

    // Chama a função para adicionar o novo produto
    adicionarProduto(novoProduto);

    // Limpa os campos do formulário
    document.querySelector(".formNovoProduto").reset();
});

// Chamando a função para exibir os produtos
obterDados();
