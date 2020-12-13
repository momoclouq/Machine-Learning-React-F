import {Component} from "react";
import Navbar from "./FirstSegment/Navbar";
import Veil from "./FirstSegment/Veil";
import Algorithms from "./SecondSegment/Algorithms";
import PoweredBy from "./ThirdSegment/PoweredBy";
import AboutUs from "./FourthSegment/AboutUs";

class Home extends Component {
    render(){
        {/*Name of the classes are snap-etc as snap effects are intended for usage*/}
        return(
            <div className="snap-container">
                {/*first segment*/}
                <section className="snap-child">
                    <Navbar/> {/*navigation bar component - status - in production*/}
                    <Veil/> {/*introduction panel component - status - in production*/}
                </section>

                {/*second segment*/}
                <section className="snap-child">
                    <Algorithms/> {/*the algorithm carousel component - status - in production*/}
                </section>

                {/*third segment*/}
                <section className="snap-child" id="powered-by-section">
                    <PoweredBy/>
                </section>

                {/*fourth segment*/}
                <section className="snap-child" id="about-us-section">
                    <AboutUs/>
                </section>

            </div>
        );
    }
}

export default Home;