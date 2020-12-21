//picture for linear regression
import linearpic from "../../../images/regression.png";

//Link for Router
import {Link} from 'react-router-dom';

const LinearRegressionCard = (props) => {
    return(
        <div className="columns panel">
            <div className="panel-left">
                <h1>Chapter 1</h1>
                <h2>Linear Regression</h2>
                <h3>Find a best-fit hyperplane to estimate the relationships between random variables.</h3>
                <Link to="/chapter1">Go to chapter 1</Link>
            </div>
            <div className="panel-right">
                <img src={linearpic} alt="linear-regression-representation"/>
            </div>
        </div>
    );
}

export default LinearRegressionCard;