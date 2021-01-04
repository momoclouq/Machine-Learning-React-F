//import image for convnetcard.js
import convnetjs from "../../../images/convnet.png";

const ConvNetCard = (props) => {
    return(
        <div className="poweredBy-card">
            <img src={convnetjs} alt="convnet.js logo"/>
            <h1 className="poweredBy-card-title">ConvNetJS</h1>
            <div className="poweredBy-card-content">A lightweight deep learning framework</div>
            <a className="poweredBy-card-button" 
                href="https://cs.stanford.edu/people/karpathy/convnetjs/"
                style={{background: '#1D3557'}}
            >Explore</a>
        </div>
    );
}

export default ConvNetCard;
