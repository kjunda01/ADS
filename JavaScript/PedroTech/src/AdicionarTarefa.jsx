import { useState } from "react";

const AdicionarTarefa = () => {
    // Armazena a lista completa de tarefas.
    const [listaDeTarefas, setListaDeTarefas] = useState([]);

    //Armazena o valor digitado atualmente no campo de entrada (apenas um item, não a lista toda).
    const [novaTarefa, setNovaTarefa] = useState("");

    const [tarefaAtual, setTarefaAtual] = useState("");

    //Atualiza o estado novaTarefa com o que foi digitado no campo de entrada.
    //Ex: Quando você digita "Comprar pão", o handleChange atualiza o estado novaTarefa para "Comprar pão".
    const handleChange = (event) => {
        setNovaTarefa(event.target.value);
    };

    // O adicionarTarefa adiciona o valor atual de novaTarefa à listaDeTarefas.
    const adicionarTarefa = () => {
        const tarefa = {
            id:
                listaDeTarefas.length === 0
                    ? 1
                    : listaDeTarefas[listaDeTarefas.length - 1].id + 1,
            nome: novaTarefa,
            completo: false,
        };

        setListaDeTarefas([...listaDeTarefas, tarefa]);
    };

    const excluirTarefa = (id) => {
        const novaListaDeTarefas = listaDeTarefas.filter((tarefa) =>
            tarefa.id === id ? false : true
        );

        setListaDeTarefas(novaListaDeTarefas);
    };

    const completarTarefa = (id) => {
        setNovaTarefa(
            novaTarefa.map((tarefa) => {
                if (tarefa.id === id) {
                    return { ...tarefa, completo: true };
                } else {
                    return tarefa;
                }
            })
        );
    };

    const editarTarefa = (id) => {
        listaDeTarefas.filter((tarefa) => {
            if (id === tarefa.id) {
                setTarefaAtual();
                console.log(tarefaAtual);
            }
        });
    };

    return (
        <div className="addTask">
            <input onChange={handleChange} />
            <button type="submit" onClick={adicionarTarefa}>
                Adicionar tarefa
            </button>
            <div className="list">
                {listaDeTarefas.map((tarefa) => (
                    <div key={tarefa.id}>
                        <h1>
                            {tarefa.id} - {tarefa.nome}
                        </h1>

                        <button onClick={() => completarTarefa(tarefa.id)}>
                            Completar
                        </button>

                        <button onClick={() => editarTarefa(tarefa.id)}>
                            Editar
                        </button>
                        <button onClick={() => excluirTarefa(tarefa.id)}>
                            Excluir
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdicionarTarefa;
