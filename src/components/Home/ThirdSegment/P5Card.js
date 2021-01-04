//import image for p5.js
import p5 from "../../../images/p5.png";

const P5Card = (props) => {
    return(
        <div className="poweredBy-card">
            <img src={p5} alt="p5.js logo"/>
            <h1 className="poweredBy-card-title">P5.js</h1>
            <div className="poweredBy-card-content">A Javascript libary for graphic creation</div>
            <a className="poweredBy-card-button" 
                href="https://p5js.org/"
                style={{background: '#EF476F'}}
            >Explore</a>
        </div>
    );
}

export default P5Card;
