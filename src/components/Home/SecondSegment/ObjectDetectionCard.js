//image for Object detection
import objectpic from "../../../images/objectdetection.png";

//Link for Router
import {Link} from "react-router-dom";

const ObjectDetectionCard = (props) => {
    return (
        <div className="columns panel" style={{margin: "auto"}}>
            <div className="panel-left">
                <h1>Chapter 4</h1>
                <h2>Object Detection</h2>
                <h3>Explore the first non-trivial application of Neural Network</h3>
                <Link to="/chapter4">Go to chapter 4</Link>
            </div>

            <div className="panel-right">
                <img src={objectpic} alt="object-detection-pic" />
            </div>
        </div>
    )
}

export default ObjectDetectionCard;