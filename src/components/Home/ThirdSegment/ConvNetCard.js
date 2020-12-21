//import image for convnetcard.js
import convnetjs from "../../../images/convnet.png";

const ConvNetCard = (props) => {
    return(
        <div className="powered-card">
            <img src={convnetjs} alt="convnet.js logo"/>
            <h1>ConvNetJS</h1>
            <div>A lightweight deep learning framework</div>
            <a href="https://cs.stanford.edu/people/karpathy/convnetjs/">Explore</a>
        </div>
    );
}

export default ConvNetCard;
