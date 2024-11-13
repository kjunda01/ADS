import { useState } from "react";

const CondicionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("João");

    return (
        <div>
            <h1>If ternário</h1>
            <h2>Isso será exibido?</h2>
            {x ? (
                <p>Se X for true, sim!</p>
            ) : (
                <p>Agora o X é falso, então mostrará isso.</p>
            )}
            {name === "João" ? (
                <div>
                    <p>O nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p>O nome {name} não foi encontrado.</p>
                </div>
            )}
            <button onClick={() => setName("Maria")}>Mudar nome</button>
        </div>
    );
};

export default CondicionalRender;
