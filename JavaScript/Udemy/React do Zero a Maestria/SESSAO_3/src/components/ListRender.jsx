import { useState } from "react";

const ListRender = () => {
    const listaDeNomes = ["Ana", "Bruna", "Carlos", "Daniel"];

    const [nomes] = useState(listaDeNomes);

    const [users, setUsers] = useState([
        { id: 1, name: "Teste", age: 31 },
        { id: 2, name: "Teste2", age: 32 },
        { id: 3, name: "Teste3", age: 33 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            {/* Aqui é usando o index*/}
            <ul>
                <p>Aqui é usando o index</p>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>

            {/* Aqui é usando o id que vem do users */}
            <ul>
                <p>Aqui é usando o id que vem do users</p>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>

            {/* Deletar usuario aleatoriamente */}
            <div>
                <button onClick={deleteRandom}>Delete random user</button>
            </div>

            {/* Renderização condicional */}
            <div>
                
            </div>
        </div>
    );
};

export default ListRender;
