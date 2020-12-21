//import image for p5.js
import p5 from "../../../images/p5.png";

const P5Card = (props) => {
    return(
        <div className="powered-card">
            <img src={p5} alt="p5.js logo"/>
            <h1>P5.js</h1>
            <div>A Javascript libary for graphic creation</div>
            <a href="https://p5js.org/">Explore</a>
        </div>
    );
}

export default P5Card;
