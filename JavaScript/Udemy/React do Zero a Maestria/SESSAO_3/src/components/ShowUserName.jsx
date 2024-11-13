import React, { useState } from "react";

const ShowUserName = (props) => {
    

    const [userName, setUserName] = useState();
    const handleChangeName = () => setUserName(userName);

    return (
        <div>
            <h2>O nome do usuário é: {props.name}</h2>
            <button onClick={handleChangeName}>Mude o nome!</button>
        </div>
    );
};

export default ShowUserName;
