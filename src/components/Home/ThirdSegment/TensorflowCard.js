//import image for tensorflow.js
import tensorflow from "../../../images/tensorflow.png";

const TensorflowCard = (props) => {
    return(
        <div className="powered-card">
            <img src={tensorflow} alt="tensorflow.js logo"/>
            <h1>Tensorflow.js</h1>
            <div>A library for machine learning in Javascript</div>
            <a href="https://www.tensorflow.org/js">Explore</a>
        </div>
    );
}

export default TensorflowCard;
