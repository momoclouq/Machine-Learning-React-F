import {Component, useRef} from "react";
import React from "react";
import Navbar from "./FirstSegment/Navbar";
import Veil from "./FirstSegment/Veil";
import Algorithms from "./SecondSegment/Algorithms";
import PoweredBy from "./ThirdSegment/PoweredBy";
import AboutUs from "./FourthSegment/AboutUs";
import Sketch from "./FirstSegment/Sketch";

class Home extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.SmoothVerticalScrolling = this.SmoothVerticalScrolling.bind(this);
    }

    //smooth scrolling
     SmoothVerticalScrolling(){
         this.myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
     }

    render(){
        {/*Name of the classes are snap-etc as snap effects are intended for usage*/}
        return(
            <div className="snap-container">
                <section style={{position: "fixed", zIndex: -100}}>
                    <Sketch/> {/*star animation*/}
                </section>
                {/*first segment*/}
                <section className="snap-child">
                    <Veil smoothScroll={this.SmoothVerticalScrolling}/> {/*introduction panel component - status - in production*/}
                </section>

                {/*second segment*/}
                <section className="snap-child" ref={this.myRef}>
                    <Algorithms /> {/*the algorithm carousel component - status - in production*/}
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