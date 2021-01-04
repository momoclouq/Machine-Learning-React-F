const Veil = (props) => {
    const styleVeil = {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return(
        <div style={styleVeil}>
            <div style={
                {
                    textAlign: "center"
                }
            }>
                <h1 className="home-title">Algorithms</h1>
                <h2 className="home-subtitle">Machine learning illustrated</h2>
                <button onClick={props.smoothScroll} className="home-button">Explore</button>
            </div>
        </div>
    );
}
    

export default Veil;