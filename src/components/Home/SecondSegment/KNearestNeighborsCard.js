//import image for visualization
import knearestpic from "../../../images/kn.png";

//Link for Router
import {Link} from "react-router-dom";

const KNearestNeighborsCard = (props) => {
    return(
        <div className="panel" style={{margin: "auto"}}>
            <div className="panel-left">
                <h1>Chapter 5</h1>
                <h2>K Nearest Neighbors</h2>
                <h3>Explore a non-parametric method in solving multiple classification tasks.</h3>
                <Link className="button" to="/chapter5">Go to chapter 5</Link>
            </div>

            <div className="panel-right">
                <img className="card-image" src={knearestpic} alt="k-nearest-representation"/>
            </div>
        </div>
    );
}

export default KNearestNeighborsCard;