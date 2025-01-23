/* eslint-disable react/prop-types */
const Tarefa = ({
  tarefaAtual,
  setTarefa,
  tarefas,
  setTarefas,
  setEdit,
}) => {
  const handleDelete = (id) => {
    const novaLista = tarefas.filter((atual) => atual.id !== id);
    setTarefas(novaLista);
  };

  const handleEdit = (objeto) => {
    setEdit(true);
    setTarefa({
      id: objeto.id,
      titulo: objeto.titulo,
      descricao: objeto.descricao,
      hora: objeto.hora,
      status: objeto.status,
    });
  };

  return (
    <div className="card h-100 bg-light bg-gradient rounded border border-warning d-flex flex-column justify-content-center align-items-center  mb-2">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title h5 text-center text-truncate fw-bold text-wrap text-break">{`${tarefaAtual.id} - ${tarefaAtual.titulo}`}</h5>
        <p className="card-text text-center text-break">
          {tarefaAtual.descricao}
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-secondary fst-italic fw-lighter text-center text-break">
            {tarefaAtual.hora}
          </p>
          <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-1">
            <button
              type="button"
              className="bi bi-pencil-square btn btn-warning btn-sm"
              onClick={() => handleEdit(tarefaAtual)}
            >
              Editar
            </button>
            <button
              type="button"
              className="bi bi-trash btn btn-danger btn-sm"
              onClick={() => handleDelete(tarefaAtual.id)}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarefa;
