const URL_API_PRODUTOS = "https://dummyjson.com/products";
// Título (title), descrição (description), preço (price), marca (brand), categoria(category), foto (thumbnail)

const URL_API_USUARIOS = "https://dummyjson.com/users";
// Nome (firstName), sobrenome (lastName), idade (age), email, foto (image)

const apiDummy = {
    // PARTE RELACIONADA AOS PRODUTOS
    async getAllProducts() {
        const request = fetch(URL_API_PRODUTOS)
            .then((resposta) => resposta.json())
            .then((produtos) => produtos);
    },

    async getSingleProduct(id) {
        const request = await fetch(`${URL_API_PRODUTOS}/${id}`)
            .then((resposta) => resposta.json())
            .then((dados) => dados);
    },

    // PARTE RELACIONADA AOS USUARIOS
    getAllUsers() {
        const request = fetch(URL_API_USUARIOS)
            .then((resposta) => resposta.json())
            .then((dados) => console.log(dados));
    },
};
