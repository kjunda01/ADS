import "./App.css";

import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <Button />

            <Modal isOpen={false}>
                <p>Oi, eu sou o children, conteudo</p>
            </Modal>
        </div>
    );
}

export default App;
