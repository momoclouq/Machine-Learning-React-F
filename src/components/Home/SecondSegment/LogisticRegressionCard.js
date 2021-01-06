//image for logistic regression
import logisticpic from "../../../images/classification.png";

//Link for Router
import {Link} from "react-router-dom";

const LogisticRegressionCard = (props) => {
    return(
        <div className="panel" style={{margin: "auto"}}>
            <div className="panel-left">
                <h1 className="card-chapter">Chapter 2</h1>
                <h2 className="card-name">Logistic Regression</h2>
                <h3 className="card-description">Find a linear hyperplane for binary classification tasks.</h3>
                <Link className="button card-button" to="/chapter2">Go to chapter 2</Link>
            </div>

            <div className="panel-right">
                <img className="card-image" src={logisticpic} alt="logistic-regression-representation"/>
            </div>
        </div>
    );
}

export default LogisticRegressionCard;