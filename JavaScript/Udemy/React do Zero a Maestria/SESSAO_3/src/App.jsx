import "./App.css";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
    function showMessage() {
        console.log("Evento do componente pai");
    }

    return (
        <div>
            <Container myValue="Teste">
                <p>Este é o conteúdo</p>
            </Container>
            <ExecuteFunction myFunction={showMessage} />
        </div>
    );
}

export default App;
