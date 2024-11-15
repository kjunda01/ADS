const handleSubmit = (evento) => {
    evento.preventDefault();

    // Send a POST request
    axios({
        method: "post",
        url: "https://veiculos.fipe.org.br/api/veiculos//ConsultarModelosAtravesDoAno",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: "315",
            codigoMarca: "28",
            codigoModelo: "9523",
            ano: "2021-1",
            anoModelo: "2021",
            codigoTipoCombustivel: "3",
            tipoVeiculo: "caminhao",
            tipoConsulta: "tradicional",
        },
    }).then((response) => console.log(response.data));
};
