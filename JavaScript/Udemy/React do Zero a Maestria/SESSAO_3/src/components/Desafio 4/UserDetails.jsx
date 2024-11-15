import React, { useState } from "react";

const UserDetails = () => {
    const users = [
        {
            id: 1,
            nome: "Ana Beatriz da Silva Santos",
            profissao: "Engenheira de Software",
            idade: 29,
        },
        {
            id: 2,
            nome: "Carlos Eduardo Pereira dos Santos",
            profissao: "Designer Gráfico",
            idade: 34,
        },
        {
            id: 3,
            nome: "Beatriz Helena Oliveira Ferreira",
            profissao: "Médica",
            idade: 40,
        },
        {
            id: 4,
            nome: "Diego Alexandre Souza Ferreira",
            profissao: "Professor",
            idade: 27,
        },
        {
            id: 5,
            nome: "Fernanda Lopes de Souza Oliveira",
            profissao: "Analista de Dados",
            idade: 12,
        },
        {
            id: 6,
            nome: "Gabriel Henrique Lima dos Anjos",
            profissao: "Desenvolvedor Web",
            idade: 24,
        },
        {
            id: 7,
            nome: "Hugo Martins da Rocha Alencar",
            profissao: "Advogado",
            idade: 9,
        },
        {
            id: 8,
            nome: "Isabel Pereira da Costa Lima",
            profissao: "Engenheira Civil",
            idade: 36,
        },
        {
            id: 9,
            nome: "João Carlos Mendes de Oliveira",
            profissao: "Empresário",
            idade: 50,
        },
        {
            id: 10,
            nome: "Larissa Fernanda Costa Oliveira",
            profissao: "Psicóloga",
            idade: 7,
        },
    ];

    const filtroHabilitados = users.filter((user) => user.idade >= 18);

    const filtroNaoHabilitados = users.filter((user) => user.idade < 18);

    const [habilitados] = useState(filtroHabilitados);
    const [naoHabilitados] = useState(filtroNaoHabilitados);

    return (
        <>
            <h1>Lista completa:</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome}</li>
                ))}
            </ul>

            <h2>Habilitados:</h2>
            <ul>
                {habilitados.map((user) => (
                    <li key={user.id}>{user.nome}</li>
                ))}
            </ul>

            <h2>Não Habilitados:</h2>
            <ul>
                {naoHabilitados.map((user) => (
                    <li key={user.id}>{user.nome}</li>
                ))}
            </ul>
        </>
    );
};

export default UserDetails;
