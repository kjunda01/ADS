import { useState } from "react";

const ListRender = () => {
    const listaDeNomes = [
        "Ana",
        "Bruna",
        "Carlos",
        "Daniel",
        "Eduardo",
        "Fernanda",
        "Gustavo",
        "Helena",
        "Isabel",
        "João",
        "Karen",
        "Luana",
        "Marcos",
        "Nathália",
        "Olga",
        "Paulo",
        "Quésia",
        "Rafael",
        "Sabrina",
        "Tatiane",
        "Ursula",
        "Vinícius",
        "Walter",
        "Ximena",
        "Yara",
        "Zeca",
        "Adriana",
        "Beatriz",
        "Cláudia",
        "Diego",
        "Eliane",
    ];

    const [nomes] = useState(listaDeNomes);

    const [users] = useState([
        { id: 1, name: "Teste", age: 31 },
        { id: 2, name: "Teste2", age: 32 },
        { id: 3, name: "Teste3", age: 33 },
    ]);

    return (
        <div>
            <ul>
                <p>Aqui é usando o index</p>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
            <ul>
                <p>Aqui é usando o id que vem do users</p>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRender;
