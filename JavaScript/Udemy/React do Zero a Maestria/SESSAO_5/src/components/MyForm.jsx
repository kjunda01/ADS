import React, { useState } from "react";
import "./MyForm.css";
import axios from "axios";

const MyForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

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

    return (
        <div>
            {/* 1 - Criação do form */}
            <form className="formulario" onSubmit={handleSubmit}>
                <h2>Formulário de cadastro</h2>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome..."
                        onChange={handleName}
                    />
                </div>

                {/* 2 - label envolvendo o input */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        onChange={handleEmail}
                    />
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;
