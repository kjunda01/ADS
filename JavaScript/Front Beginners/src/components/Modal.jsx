const BACKGROUND_STYLE = {
    position: "fixed",
    top: "0",
    botton: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    zIndex: "1000",
    color: "white",
};

const MODAL_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "150px",
    backgroundColor: "#123",
    borderRadius: "10px",
};

const Modal = ({ isOpen, children }) => {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>X</div>
                    <div>{children}</div>

                    <div>
                        <button onClick={() => !isOpen}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;
