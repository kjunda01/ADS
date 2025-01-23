import { useState } from 'react';
import './App.css';
import CriarLog from './components/CriarLog';

function App() {
  const [contador, setContador] = useState(0);
  const [logs, setLogs] = useState([]);

  const handleDecrease = () => {
    const novoContador = contador - 1;
    setContador(novoContador);
    setLogs((prevLogs) => [...prevLogs, `Diminuiu - (${novoContador})`]);
  };

  const handleIncrease = () => {
    const novoContador = contador + 1;
    setContador(novoContador);
    setLogs((prevLogs) => [...prevLogs, `Aumentou - (${novoContador})`]);
  };

  const handleSetToZero = () => {
    setContador(0);
    setLogs((prevLogs) => [...prevLogs, `ZEROU! - (0)`]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="contador">{contador}</h1>
      </div>
      <div className="caixaBotoes">
        <button className="diminuir" onClick={handleDecrease}>
          Diminuir
        </button>
        <button className="mudarParaZero" onClick={handleSetToZero}>
          Mudar Para Zero
        </button>
        <button className="aumentar" onClick={handleIncrease}>
          Aumentar
        </button>
      </div>
      <div className="log">
        <table>
          <thead>
            <tr>
              <th>Log dos cliques</th>
            </tr>
          </thead>
          <tbody>
            {logs
              .slice()
              .reverse()
              .map((mensagem, index) => (
                <tr key={index}>
                  <CriarLog mensagem={mensagem} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
