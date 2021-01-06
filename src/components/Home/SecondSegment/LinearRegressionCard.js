//picture for linear regression
import linearpic from "../../../images/regression.png";

//Link for Router
import {Link} from 'react-router-dom';

const LinearRegressionCard = (props) => {
    return(
        <div className="panel">
            <div className="panel-left">
                <h1 className="card-chapter">Chapter 1</h1>
                <h2 className="card-name">Linear Regression</h2>
                <h3 className="card-description">Find a best-fit hyperplane to estimate the relationships between random variables.</h3>
                <Link className="button card-button" to="/chapter1">Go to chapter 1</Link>
            </div>
            <div className="panel-right">
                <img className="card-image" src={linearpic} alt="linear-regression-representation"/>
            </div>
        </div>
    );
}

export default LinearRegressionCard;