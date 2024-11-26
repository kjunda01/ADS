const URL_API_PRODUTOS = "https://dummyjson.com/products";
// Título (title), descrição (description), preço (price), marca (brand), categoria(category), foto (thumbnail)

const URL_API_USUARIOS = "https://dummyjson.com/users";
// Nome (firstName), sobrenome (lastName), idade (age), email, foto (image)

const apiDummy = {
    // PARTE RELACIONADA AOS PRODUTOS
    async getAllProducts() {
        const resposta = fetch(URL_API_PRODUTOS);
        return await resposta.json();
    },

    async getSingleProduct(id) {
        const request = fetch(`${URL_API_PRODUTOS}/${id}`);
        return await resposta.json();
    },

    // PARTE RELACIONADA AOS USUARIOS
    getAllUsers() {
        const request = fetch(URL_API_USUARIOS, {
            method: "GET",
        })
            .then((resposta) => resposta.json())
            .then((dados) => console.log(dados));
    },
};

export default apiDummy;
