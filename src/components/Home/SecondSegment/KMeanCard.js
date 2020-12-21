//import image for visualization
import kmeanpic from "../../../images/kmean.png"

//Link for router
import {Link} from "react-router-dom";

const KMeanCard = (props) => {
    return (
        <div className="columns panel">
            <div className="panel-left">
                <h1>Chapter 6</h1>
                <h2>K Mean Clustering</h2>
                <h3>A traditional unsupervised learning method to cluster similar datapoints.</h3>
                <Link to="/chapter6">Go to chapter 6</Link>
            </div>

            <div className="panel-right">
                <img src={kmeanpic} alt="k-mean-representation"/>
            </div>
        </div>
    );
}

export default KMeanCard;