//import images for each members
import avatar from "../../../images/avatar.png";

import React from 'react';
import {Component} from 'react';
import {Animated} from 'react-animated-css';

class AboutUs extends Component {
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
        const box = document.querySelector('.about-outer');
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
            <div className="about-outer">
                <h1 className="about-title">About</h1>
                <p className="about-content">The Machine Learning Illustrated project was created by Phat and Minh, two undergraduates at RMIT university. The goals of this project is to make machine learning algorithms more intuitive and accessible. It is also heavily influenced by <a href="https://seeing-theory.brown.edu/">Seeing Theory</a></p>
                <h1 className="about-title">Authors</h1>

                <div className="columns">
                    <div className="column about-centerpiece">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1 className="about-name">Tran Son Phat</h1>
                        </Animated>
                    </div>
                    <div className="column about-centerpiece">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1 className="about-name">Pham Hoang Minh</h1>
                        </Animated>
                    </div>
                    <div className="column about-centerpiece">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1 className="about-name">Nguyen Truc Nhan</h1>
                        </Animated>
                    </div>
                    <div className="column about-centerpiece">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1 className="about-name">Do Ha Minh Long</h1>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;