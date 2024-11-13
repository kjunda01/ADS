import React from "react";

function Challenge() {
    const valor1 = 10;
    const valor2 = 35;
    const somarValores = () => console.log(valor1 + valor2);
    return (
        <div>
            <p>{`Valor 1: ${valor1}`}</p>
            <p>{`Valor 2: ${valor2}`}</p>
            <button type="button" onClick={somarValores}>
                Clique para somar
            </button>
        </div>
    );
}

export default Challenge;
