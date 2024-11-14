const Container = ({ children, myValue }) => {
    return (
        <div>
            <h2>Este é o titulo</h2>
            {children}
            <p>Este é o props: '{myValue}'</p>
        </div>
    );
};

export default Container;
