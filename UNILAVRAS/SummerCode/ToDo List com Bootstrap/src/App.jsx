import Titulo from './components/Titulo';
import NovaTarefa from './components/NovaTarefa';
import Subtitulo from './components/Subtitulo';
import Tarefa from './components/Tarefa';
import { useState } from 'react';

const App = () => {
  const [tarefa, setTarefa] = useState({
    titulo: '',
    descricao: '',
    hora: '',
    status: false,
  });
  const [tarefas, setTarefas] = useState([]);
  const [edit, setEdit] = useState(false);

  return (
    <div className="d-flex flex-column vh-100 bg-dark bg-gradient">
      {/* Lado de cima */}
      <div className="m-2 d-flex flex-column">
        <div className="m-2 border rounded border-warning">
          <Titulo texto=" Tarefas!" />
          <NovaTarefa
            tarefa={tarefa}
            setTarefa={setTarefa}
            tarefas={tarefas}
            setTarefas={setTarefas}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
      </div>

      {/* Lado de baixo - Área de Tarefas */}
      <div className="d-flex flex-column flex-grow-1 overflow-auto m-3">
        <div className="border rounded border-warning flex-grow-1 overflow-auto">
          <Subtitulo texto="Tarefas adicionadas" />
          <div className="container-fluid row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 row-cols-1 g-2 p-2 ">
            {tarefas.map((tarefaAtual) => (
              <div className="col" key={tarefaAtual.id}>
                <Tarefa
                  tarefaAtual={tarefaAtual}
                  setTarefa={setTarefa}
                  tarefas={tarefas}
                  setTarefas={setTarefas}
                  setEdit={setEdit}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
