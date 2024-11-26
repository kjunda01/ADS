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

    // Monta o HTML usando template literals
    const produtoHTML = `
        <div class="produto" data-id="${produto.id}">
            <div class="titulo-descricao">
                <div><strong>${produto.title}</strong></div>
                <div>${produto.description}</div>
            </div>
            <div class="detalhes">
                <div><strong>Preço: </strong>R$ ${produto.price}</div>
                <div><strong>Marca: </strong>${produto.brand}</div>
                <div><strong>Categoria: </strong>${produto.category}</div>
            </div>
            <img src="${
                produto.thumbnail || "https://via.placeholder.com/120"
            }" alt="${produto.title}" />
            <button class="deleteBtn">🗑️</button>
            </div>
    `;

    // Insere o HTML no container
    produtosContainer.innerHTML += produtoHTML;
}

// Evento de clique para delegação de exclusão de produto
document
    .querySelector(".todosOsProdutos")
    .addEventListener("click", (event) => {
        // Verifica se o botão clicado é o botão de excluir (deleteBtn)
        if (event.target && event.target.classList.contains("deleteBtn")) {
            const produtoElement = event.target.closest(".produto");
            const id = produtoElement.getAttribute("data-id");

            // Exibe a caixa de confirmação
            const confirmDelete = window.confirm(
                "Tem certeza que deseja excluir este produto?"
            );
            if (confirmDelete) {
                deletarProduto(id, produtoElement);
            } else {
                console.log("Exclusão cancelada.");
            }
        }
    });

// Função para excluir o produto
async function deletarProduto(id, produtoElement) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (data) {
            // Remove o item do DOM
            produtoElement.remove();
            console.log(`Produto com ID ${id} foi deletado.`);
        }
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}

// Função para validar os campos do formulário de produto
function validarCampos(titulo, descricao, preco, marca, categoria, foto) {
    let isValid = true;

    // Limpa as mensagens de erro anteriores
    clearErrors();

    // Validação do título
    if (!titulo || titulo.length < 3 || titulo.length > 100) {
        showError(
            ".tituloProduto",
            "O título deve ter entre 3 e 100 caracteres."
        );
        isValid = false;
    }

    // Validação da descrição
    if (!descricao || descricao.length < 10 || descricao.length > 300) {
        showError(
            ".descricaoProduto",
            "A descrição deve ter entre 10 e 300 caracteres."
        );
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
        showError(
            ".categoriaProduto",
            "A categoria deve ter entre 3 e 50 caracteres."
        );
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
document
    .querySelector(".formNovoProduto")
    .addEventListener("submit", (event) => {
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
