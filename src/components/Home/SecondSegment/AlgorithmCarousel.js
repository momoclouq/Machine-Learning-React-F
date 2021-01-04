import {Component} from 'react';
import Slider from 'react-slick';
import LinearRegressionCard from './LinearRegressionCard';
import LogisticRegressionCard from './LogisticRegressionCard';
import NeuralNetworkCard from './NeuralNetworkCard';
import ObjectDetectionCard from './ObjectDetectionCard';
import KNearestNeighborsCard from './KNearestNeighborsCard';
import KMeanCard from './KMeanCard';


class AlgorithmCarousel extends Component {
    render(){
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return(
            <div className="carousel">
                <Slider {...settings}>
                    <div>
                        <LinearRegressionCard/>
                    </div>
                    <div>
                        <LogisticRegressionCard/>
                    </div>
                    <div>
                        <NeuralNetworkCard/>
                    </div>
                    <div>
                        <ObjectDetectionCard/>
                    </div>
                    <div>
                        <KNearestNeighborsCard/>
                    </div>
                    <div>
                        <KMeanCard/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default AlgorithmCarousel;