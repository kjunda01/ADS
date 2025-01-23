/* eslint-disable react/prop-types */
const Subtitulo = ({ texto }) => {
  return (
    <div className="d-flex flex-column align-items-start justify-content-center m-2">
      <h2 className="text-light  text-center">{texto}</h2>
    </div>
  );
};

export default Subtitulo;
