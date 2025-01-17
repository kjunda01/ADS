const Filtro = ({ setFiltro }) => {
  const filtros = [
    { valor: "", texto: "Todas" },
    { valor: "completas", texto: "Completas" },
    { valor: "incompletas", texto: "Incompletas" }
  ];

  const handleOpcaoFiltro = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div>
      <div className='filtrarContainer'>
        <h2>Filtre as tarefas</h2>
        <select name='opcao' id='opcao' onChange={handleOpcaoFiltro}>
          {filtros.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>
              {opcao.texto}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filtro;
