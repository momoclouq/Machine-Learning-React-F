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
        }

        this.changeVisible = this.changeVisible.bind(this);
    }

    changeVisible(){
        this.setState((previousState) => {
            return {
                visible: !previousState.visible
            }
        });
    }

    render(){
        return(
            <div className="about-outer">
                <h1>About</h1>
                <p>The Machine Learning Illustrated project was created by Phat and Minh, two undergraduates at RMIT university. The goals of this project is to make machine learning algorithms more intuitive and accessible. It is also heavily influenced by <a href="https://seeing-theory.brown.edu/">Seeing Theory</a></p>
                <h1>Authors</h1>

                <div className="about-inner">
                    <div className="about-element">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1>Tran Son Phat</h1>
                        </Animated>
                    </div>
                    <div className="about-element">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1>Pham Hoang Minh</h1>
                        </Animated>
                    </div>
                    <div className="about-element">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1>Nguyen Truc Nhan</h1>
                        </Animated>
                    </div>
                    <div className="about-element">
                        <Animated 
                            animationIn="bounceInLeft" 
                            animationOut="fadeOut"
                            animationInDuration="800"
                            isVisible={this.state.visible}>
                            <img src={avatar} alt="Avatar"/>
                            <h1>Do Ha Minh Long</h1>
                        </Animated>
                    </div>
                </div>

                <button type="button" onClick={this.changeVisible}>start animation</button>
            </div>
        );
    }
}

export default AboutUs;