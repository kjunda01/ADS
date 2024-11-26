import apiDummy from "./api";

apiDummy
    .getAllProducts()
    .then((produtos) => {
        console.log(produtos); // Aqui você manipula os dados retornados
    })
    .catch((erro) => {
        console.error("Erro ao obter produtos:", erro);
    });
