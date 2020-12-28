import React from 'react';
import {Component} from 'react';
import {Animated} from 'react-animated-css';

import P5Card from './P5Card';
import TensorflowCard from './TensorflowCard';
import ConvNetCard from './ConvNetCard';

import ScrollAnimation from "react-animate-on-scroll";

class PoweredBy extends Component{
    constructor(props){
        super(props);

        this.state = {
            visible: false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        document
            .querySelector('.snap-container')
            .addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        document
            .querySelector('.snap-container')
            .removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        const box = document.querySelector('.poweredBy-inner');
        if (this.isInViewport(box)) {
            this.setState({
                visible: true
            });
            document
                .querySelector('.snap-container')
                .removeEventListener('scroll', this.handleScroll);
        }
    }

    isInViewport(el){
        let rect = el.getBoundingClientRect();
        return rect.bottom <= window.innerHeight + 10;
    }

    render(){
        return(
            <div className="poweredBy-outer">
                <h1>Powered By</h1>
                <div className="poweredBy-inner">
                    <div className="poweredBy-element">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="400"
                        >
                            <P5Card/>
                        </Animated>
                    </div>
                    <div className="poweredBy-element">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="400"
                        >
                            <ConvNetCard/>
                        </Animated>
                    </div>
                    <div className="poweredBy-element">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="400"
                        >
                            <TensorflowCard/>
                        </Animated>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PoweredBy;