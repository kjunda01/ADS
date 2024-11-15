import { useState } from "react";
import "./App.css";
import UserDetails from "./components/Desafio 4/UserDetails";


function App() {
    const [message, setMessage] = useState("");

    const handleMessage = (msg) => {
        setMessage(msg);
    };

    return (
        <div>
            <UserDetails />
        </div>
    );
}

export default App;
