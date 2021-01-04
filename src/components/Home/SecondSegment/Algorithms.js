//display the algorithm carousel
//serve as a container
import AlgorithmCarousel from './AlgorithmCarousel';

const Algorithms = (props) => {
    return(
        <div style={{background: "rgba(0, 0, 0, 0.2)", height: "100vh"}}>
            <h1 className="carousel-title">Explore Machine Learning</h1>
            <AlgorithmCarousel />
        </div>
    );
}

export default Algorithms;