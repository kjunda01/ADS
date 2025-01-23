/* eslint-disable react/prop-types */
const NovaTarefa = ({
  tarefa,
  setTarefa,
  tarefas,
  setTarefas,
  edit,
  setEdit,
}) => {
  const handleTextoTarefa = (e) => {
    const { name, value } = e.target;

    setTarefa((prev) => ({ ...prev, [name]: value }));
  };

  const handleNovaTarefa = (e) => {
    e.preventDefault();
    const hora = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;

    if (edit) {
      setTarefas((prevTarefas) =>
        prevTarefas.map((t) => (t.id === tarefa.id ? { ...tarefa, hora } : t)),
      );
      setEdit(false);
    } else {
      const ID = tarefas.length === 0 ? 1 : tarefas[tarefas.length - 1].id + 1;
      const novaTarefa = { ...tarefa, id: ID, hora, status: false };

      if (tarefa.titulo) {
        setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
      }
    }

    // Limpar o estado de tarefa
    setTarefa({ titulo: '', descricao: '', hora: '', status: false });
  };

  const handleCancelarEdicao = (e) => {
    e.preventDefault();
    setTarefa({ titulo: '', descricao: '', hora: '', status: false });
    setEdit(false);
  };

  return (
    <div className="container-fluid d-flex flex-column w-100">
      <form className="d-flex flex-row align-items-center justify-content-center flex-wrap">
        <div className="form-floating m-2 col-4">
          <input
            type="text"
            name="titulo"
            id="titulo"
            className="form-control bg-light text-dark"
            placeholder="Qual é sua próxima tarefa?"
            onChange={handleTextoTarefa}
            value={tarefa.titulo}
          />
          <label
            htmlFor="titulo"
            className="text-secondary fs-6 text-break txt-wrap w-75"
          >
            Título
          </label>
        </div>

        <div className="form-floating m-2 col-4">
          <textarea
            name="descricao"
            id="descricao"
            className="form-control bg-light text-dark w-100"
            placeholder="Adicione detalhes sobre sua tarefa (opcional)"
            rows="12"
            onChange={handleTextoTarefa}
            value={tarefa.descricao}
          />
          <label
            htmlFor="descricao"
            className="text-secondary fs-6 text-break txt-wrap w-75"
          >
            Desc.
          </label>
        </div>

        <div className="form-floating m-2 col-2">
          <button
            type="submit"
            className={`btn text-center ${
              edit
                ? 'bi bi-pencil-square btn-warning'
                : 'bi bi-plus btn-success'
            }`}
            onClick={handleNovaTarefa}
          ></button>
          {edit && (
            <button
              type="submit"
              className={`btn text-center ${
                edit ? 'bi bi-x-square btn-danger' : 'bi bi-plus btn-success'
              }`}
              onClick={handleCancelarEdicao}
            ></button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NovaTarefa;
