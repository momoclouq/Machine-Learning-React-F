//import image for visualization
import kmeanpic from "../../../images/kmean.png"

//Link for router
import {Link} from "react-router-dom";

const KMeanCard = (props) => {
    return (
        <div className="panel">
            <div className="panel-left">
                <h1 className="card-chapter">Chapter 6</h1>
                <h2 className="card-name">K Mean Clustering</h2>
                <h3 className="card-description">A traditional unsupervised learning method to cluster similar datapoints.</h3>
                <Link className="button card-button" to="/chapter6">Go to chapter 6</Link>
            </div>

            <div className="panel-right">
                <img className="card-image" src={kmeanpic} alt="k-mean-representation"/>
            </div>
        </div>
    );
}

export default KMeanCard;