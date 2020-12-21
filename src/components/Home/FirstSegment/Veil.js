//In production
const Veil = (props) => {
    const style = {
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid pink"
    };

    return(
        <div style={style}>
            <div style={
                {
                    textAlign: "center"
                }
            }>
                <h1 className="home-title">Algorithms</h1>
                <h2 className="home-subtitle">Machine learning illustrated</h2>
                <a href="#carousel" className="button is-white home-button">Explore</a>
            </div>
        </div>
    );
}

export default Veil;