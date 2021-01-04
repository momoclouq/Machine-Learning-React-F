//import image for tensorflow.js
import tensorflow from "../../../images/tensorflow.png";

const TensorflowCard = (props) => {
    return(
        <div className="poweredBy-card">
            <img src={tensorflow} alt="tensorflow.js logo"/>
            <h1 className="poweredBy-card-title">Tensorflow.js</h1>
            <div className="poweredBy-card-content">A library for machine learning in Javascript</div>
            <a className="poweredBy-card-button" 
                href="https://www.tensorflow.org/js"
                style={{background: '#F4A261'}}
            >Explore</a>
        </div>
    );
}

export default TensorflowCard;
