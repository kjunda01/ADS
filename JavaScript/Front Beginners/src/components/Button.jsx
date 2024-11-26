import React, { useState } from "react";

const Button = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button onClick={() => setOpenModal(true)}>Abrir modal</button>
        </div>
    );
};

export default Button;
