const CriarLog = ({ mensagem }) => {
  const definirCor = (mensagem) => {
    if (mensagem[0] === 'D') return 'red';
    if (mensagem[0] === 'A') return 'blue';
    return 'green';
  };

  return <td style={{ color: definirCor(mensagem) }}>{mensagem}</td>;
};

export default CriarLog;
