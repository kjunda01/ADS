import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
    const [message, setMessage] = useState("");

    const handleMessage = (msg) => {
        setMessage(msg);
    };

    return (
        <div>
            <Message msg={message} />
            <ChangeMessageState handleMessage={handleMessage} />
        </div>
    );
}

export default App;
