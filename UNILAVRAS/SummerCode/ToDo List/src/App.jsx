import { useState } from "react";
import "./App.css";
import Titulo from "./components/1Titulo";
import NovaTarefa from "./components/2NovaTarefa";
import Filtro from "./components/3Filtro";
import ListaDeTarefas from "./components/4ListaDeTarefas";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState(false);
  const [isEditando, setIsEditando] = useState(null);

  const tarefasFiltradas = tarefas
    .filter((tarefaAtual) => {
      if (filtro === "completas") return tarefaAtual.status;
      if (filtro === "incompletas") return !tarefaAtual.status;
      return true;
    })
    .sort((a, b) => Number(a.status) - Number(b.status));

  const handleCompletarTarefa = (id) => {
    setTarefas((estadoAnterior) =>
      estadoAnterior.map((tarefaAtual) =>
        tarefaAtual.id === id
          ? {
              ...tarefaAtual,
              status: !tarefaAtual.status
            }
          : tarefaAtual
      )
    );
  };

  const handleEditarTarefa = (tarefa) => {
    setTarefa(tarefa.descricao);
    setIsEditando(tarefa.id);
  };

  return (
    <>
      <Titulo texto='Lista de tarefas' />

      <NovaTarefa tarefa={tarefa} setTarefa={setTarefa} tarefas={tarefas} setTarefas={setTarefas} isEditando={isEditando} setIsEditando={setIsEditando} />

      <Filtro setFiltro={setFiltro} />

      <ListaDeTarefas tarefas={tarefas} setTarefas={setTarefas} tarefasFiltradas={tarefasFiltradas} handleCompletarTarefa={handleCompletarTarefa} handleEditarTarefa={handleEditarTarefa} />
    </>
  );
}

export default App;
