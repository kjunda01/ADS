// Função para obter os dados dos produtos
async function obterDados() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Erro ao obter os dados dos produtos");
        }
        const data = await response.json();
        const produtos = data.products;
        const produtosContainer = document.querySelector(".todosOsProdutos");
        produtosContainer.innerHTML = "";
        produtos.forEach((item) => {
            exibirProduto(item);
        });
    } catch (error) {
        console.error("Erro:", error);
    }
}

async function adicionarProduto(produto) {
    try {
        const response = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),
        });

        const data = await response.json();
        console.log("Novo produto adicionado:", data);

        alert("Novo produto adicionado com sucesso!");

        exibirProduto(data);
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
    }
}

function exibirProduto(produto) {
    const produtosContainer = document.querySelector(".todosOsProdutos");

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

    produtosContainer.innerHTML += produtoHTML;
}

document
    .querySelector(".todosOsProdutos")
    .addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("deleteBtn")) {
            const produtoElement = event.target.closest(".produto");
            const id = produtoElement.getAttribute("data-id");

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

async function deletarProduto(id, produtoElement) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (data) {
            produtoElement.remove();
            console.log(`Produto com ID ${id} foi deletado.`);
        }
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}

function validarCampos(titulo, descricao, preco, marca, categoria, foto) {
    let isValid = true;

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

    return isValid;
}

function showError(selector, message) {
    const field = document.querySelector(selector);
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => error.remove());
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

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

        if (!validarCampos(titulo, descricao, preco, marca, categoria, foto)) {
            return;
        }

        const novoProduto = {
            title: titulo,
            description: descricao,
            price: preco,
            brand: marca,
            category: categoria,
            thumbnail: foto || "https://via.placeholder.com/100",
        };

        adicionarProduto(novoProduto);

        document.querySelector(".formNovoProduto").reset();
    });

obterDados();
