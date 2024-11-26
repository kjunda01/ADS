// api.js

const URL_API_PRODUTOS = "https://dummyjson.com/products";
const URL_API_USUARIOS = "https://dummyjson.com/users";

export const apiDummy = {
    // PARTE RELACIONADA AOS PRODUTOS
    async getAllProducts() {
        try {
            const resposta = await fetch(URL_API_PRODUTOS);
            const produtos = await resposta.json();
            return produtos;
        } catch (error) {
            console.error("Erro ao buscar os produtos:", error);
        }
    },

    async getSingleProduct(id) {
        try {
            const resposta = await fetch(`${URL_API_PRODUTOS}/${id}`);
            const produto = await resposta.json();
            return produto;
        } catch (error) {
            console.error(`Erro ao buscar o produto com id ${id}:`, error);
        }
    },

    async deleteProduct(id) {
        try {
            const resposta = await fetch(`${URL_API_PRODUTOS}/${id}`, {
                method: "DELETE",
            });
            const produtoDeletado = await resposta.json();
            return produtoDeletado;
        } catch (error) {
            console.error(`Erro ao deletar o produto com id ${id}:`, error);
        }
    },

    async searchProducts(termo) {
        try {
            const resposta = await fetch(
                `${URL_API_PRODUTOS}/search?q=${termo}`
            );
            const pesquisa = await resposta.json();
            return pesquisa;
        } catch (error) {
            console.error(
                `Erro ao pesquisar o produto com o termo ${termo}:`,
                error
            );
        }
    },

    // PARTE RELACIONADA AOS USUARIOS
    async getAllUsers() {
        try {
            const resposta = await fetch(URL_API_USUARIOS);
            const usuarios = await resposta.json();
            return usuarios;
        } catch (error) {
            console.error("Erro ao buscar os usuários:", error);
        }
    },

    async getSingleUser(id) {
        // Adicionando id como parâmetro
        try {
            const resposta = await fetch(`${URL_API_USUARIOS}/${id}`);
            const usuario = await resposta.json();
            return usuario;
        } catch (error) {
            console.error(`Erro ao buscar o usuário com id ${id}:`, error);
        }
    },

    async searchUsers(termo) {
        try {
            const resposta = await fetch(
                `${URL_API_USUARIOS}/search?q=${termo}`
            );
            const pesquisa = await resposta.json();
            return pesquisa;
        } catch (error) {
            console.error(
                `Erro ao pesquisar usuário com o termo ${termo}:`,
                error
            );
        }
    },
};
