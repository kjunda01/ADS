import City from "./assets/city.jpg";

const ImagensTeste = () => {
    return (
        <div>
            <div>
                <h1>Imagem em public</h1>
                <img src="/img1.jpg" alt="paisagem"></img>
            </div>
            <div>
                <h1>Imagem em assets</h1>
                <img src="./src/assets/city.jpg" alt="paisagem"></img>
            </div>
            <div>
                <h1>Imagem em assets com importação</h1>
                <img src={City} alt="paisagem"></img>
            </div>
        </div>
    );
};

export default ImagensTeste;
