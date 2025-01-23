const Titulo = ({ texto }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-1">
      <h1 className="bi bi-list-check text-light fw-bold text-center">
        {texto}
      </h1>
      <hr className="text-light w-75" />
    </div>
  );
};

export default Titulo;
