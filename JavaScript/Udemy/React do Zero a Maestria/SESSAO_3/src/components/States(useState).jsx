import React, { useState } from "react";

const States = () => {
    // const [name, setName] = useState("(Nome inicial)");
    // console.log(setName);

    // return (
    //     <div>
    //         <p>O meu nome é: {name}</p>
    //         <button
    //             onClick={() => {
    //                 setName("'Este é o novo nome alterado'");
    //             }}
    //         >
    //             Clique para mudar de nome
    //         </button>
    //     </div>
    // );

    const [name, setName] = useState("'Teste'");
    const [number, setNumber] = useState(1);

    console.log(name);
    console.log(number);

    const changeNumber = () => {
        // Previus Value
        setNumber((prevNumber) => prevNumber + 1);
        setNumber((prevNumber) => prevNumber + 1);
    };

    return (
        <div>
            <h1>Meu nome é: {name}</h1>
            <input
                type="text"
                name="text"
                id="text"
                placeholder="Informe seu nome.."
                value={name}
                onChange={(evento) => setName(evento.target.value)}
            />
            <div>
                <p>Número: {number}</p>
                <button onClick={changeNumber}>Mudar número!</button>
            </div>
        </div>
    );
};

export default States;
