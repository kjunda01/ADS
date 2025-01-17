const ListaDeTarefas = ({ tarefas, setTarefas, tarefasFiltradas, handleCompletarTarefa, handleEditarTarefa }) => {
  const handleDeletarTarefa = (id) => {
    const novaLista = tarefas.filter((tarefaAtual) => tarefaAtual.id !== id);
    setTarefas(novaLista);
  };
  return (
    <div className='tarefaContainer'>
      {tarefasFiltradas.map((tarefaAtual) => (
        <div className='tarefa' key={tarefaAtual.id}>
          <button className={`bntCompletar ${tarefaAtual.status ? "bntFinalizada" : ""}`} onClick={() => handleCompletarTarefa(tarefaAtual.id)}>
            {tarefaAtual.status ? "Finalizada" : "Completar"}
          </button>

          <p className={`textoTarefa ${tarefaAtual.status ? "tarefaConcluida" : ""}`} onClick={!tarefaAtual.status ? () => handleEditarTarefa(tarefaAtual) : undefined}>
            {tarefaAtual.descricao}
          </p>

          <button className='bntDeletar' onClick={() => handleDeletarTarefa(tarefaAtual.id)}>
            Deletar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaDeTarefas;
