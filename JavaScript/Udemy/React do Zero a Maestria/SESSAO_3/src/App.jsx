import "./App.css";

import CarDetails from "./components/CarDetails";

function App() {
    return (
        <div>
            <CarDetails key="1" brand="Fiat" color="Branco" km="54321" />
        </div>
    );
}

export default App;
