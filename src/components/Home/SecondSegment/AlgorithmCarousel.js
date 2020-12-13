import {Component} from 'react';
import Slider from 'react-slick';


class AlgorithmCarousel extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return(
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
        );
    }
}

export default AlgorithmCarousel;