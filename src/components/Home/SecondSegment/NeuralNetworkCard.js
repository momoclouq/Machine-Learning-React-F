//image for logistic regression
import neuralpic from "../../../images/neural.png";

//Link for Router
import {Link} from "react-router-dom";

const NeuralNetworkCard = (props) => {
    return(
        <div className="columns panel" style={{margin: "auto"}}>
            <div className="panel-left">
                <h1>Chapter 3</h1>
                <h2>Neural Network</h2>
                <h3>Discover complex decision boundaries by mimicking a human's brain.</h3>
                <Link to="/chapter3">Go to chapter 3</Link>
            </div>

            <div className="panel-right">
                <img src={neuralpic} alt="neural-network-representation"/>
            </div>
        </div>
    );
}

export default NeuralNetworkCard;