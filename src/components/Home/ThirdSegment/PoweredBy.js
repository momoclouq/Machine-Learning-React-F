import React from 'react';
import {Component} from 'react';
import {Animated} from 'react-animated-css';

import P5Card from './P5Card';
import TensorflowCard from './TensorflowCard';
import ConvNetCard from './ConvNetCard';

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
        const box = document.querySelector('.poweredBy-title');
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
        //check if element is in the viewport
        let rect = el.getBoundingClientRect();
        return rect.bottom <= window.innerHeight + 10;
    }

    render(){
        return(
            <div className="poweredBy-outer">
                <h1 className="poweredBy-title">Powered By</h1>
                <div className="columns">
                    <div className="column">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="400"
                            animationInDelay="300"
                        >
                            <P5Card/>
                        </Animated>
                    </div>
                    <div className="column">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="400"
                            animationInDelay="300"
                        >
                            <ConvNetCard/>
                        </Animated>
                    </div>
                    <div className="column">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="400"
                            animationInDelay="300"
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