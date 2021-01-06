//image for Object detection
import objectpic from "../../../images/objectdetection.png";

//Link for Router
import {Link} from "react-router-dom";

const ObjectDetectionCard = (props) => {
    return (
        <div className="panel" style={{margin: "auto"}}>
            <div className="panel-left">
                <h1 className="card-chapter">Chapter 4</h1>
                <h2 className="card-name">Object Detection</h2>
                <h3 className="card-description">Explore the first non-trivial application of Neural Network</h3>
                <Link className="button card-button" to="/chapter4">Go to chapter 4</Link>
            </div>

            <div className="panel-right">
                <img className="card-image" src={objectpic} alt="object-detection-pic" />
            </div>
        </div>
    )
}

export default ObjectDetectionCard;