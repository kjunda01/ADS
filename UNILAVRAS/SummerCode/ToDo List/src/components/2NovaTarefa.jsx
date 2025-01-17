import { useState } from "react";

const NovaTarefa = ({ tarefa, setTarefa, tarefas, setTarefas, isEditando, setIsEditando }) => {
  const handleTextoNovaTarefa = (e) => {
    if (e.target.value !== "") {
      setTarefa(e.target.value);
    }
  };

  const handleAddTarefa = (e) => {
    e.preventDefault();

    if (isEditando) {
      setTarefas((estadoAnterior) => estadoAnterior.map((tarefaAtual) => (tarefaAtual.id === isEditando && tarefaAtual.descricao !== tarefa ? { ...tarefaAtual, descricao: tarefa } : tarefaAtual)));
      setIsEditando(null);
    } else {
      const novaTarefa = {
        id: tarefas.length === 0 ? 1 : tarefas[tarefas.length - 1].id + 1,
        descricao: tarefa,
        status: false
      };
      setTarefas((estadoAnterior) => [...estadoAnterior, novaTarefa]);
    }

    setTarefa("");
  };

  return (
    <div className='addTarefaContainer'>
      <form>
        <input type='text' placeholder='Adicione uma nova tarefa' onChange={handleTextoNovaTarefa} value={tarefa} />
        <button className='bntAddTarefa' type='submit' onClick={handleAddTarefa} disabled={!tarefa}>
          {isEditando ? "Salvar" : "Add"}
        </button>
        {isEditando && (
          <button
            className='bntCancelarEdicao'
            type='button'
            onClick={() => {
              setTarefa("");
              setIsEditando(null);
            }}
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};

export default NovaTarefa;
