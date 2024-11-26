// Importar as funções de api.js
import { apiDummy } from "./api.js";

// Função para exibir os produtos no HTML
async function exibirProdutos() {
    const produtos = await apiDummy.getAllProducts();
    const productList = document.getElementById("productList");

    // Limpar lista antes de adicionar novos itens
    productList.innerHTML = "";

    if (produtos && produtos.products) {
        produtos.products.forEach((produto) => {
            const li = document.createElement("li");
            li.textContent = `${produto.title} - R$${produto.price}`;
            productList.appendChild(li);
        });
    }
}

// Função para exibir os usuários no HTML
async function exibirUsuarios() {
    const usuarios = await apiDummy.getAllUsers();
    const userList = document.getElementById("userList");

    // Limpar lista antes de adicionar novos itens
    userList.innerHTML = "";

    if (usuarios && usuarios.users) {
        usuarios.users.forEach((usuario) => {
            const li = document.createElement("li");
            li.textContent = `${usuario.firstName} ${usuario.lastName} - Idade: ${usuario.age}`;
            userList.appendChild(li);
        });
    }
}

// Chamar as funções para exibir os dados ao carregar a página
exibirProdutos();
exibirUsuarios();