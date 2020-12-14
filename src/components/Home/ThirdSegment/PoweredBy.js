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
            <div className="poweredBy-outer">
                <h1>Powered By</h1>
                <div className="poweredBy-inner">
                    <div className="poweredBy-element">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="800"
                        >
                            <P5Card/>
                        </Animated>
                    </div>
                    <div className="poweredBy-element">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="800"
                        >
                            <ConvNetCard/>
                        </Animated>
                    </div>
                    <div className="poweredBy-element">
                        <Animated 
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                            isVisible={this.state.visible}
                            animationInDuration="800"
                        >
                            <TensorflowCard/>
                        </Animated>
                    </div>
                    
                </div>
                <div><button type="button" onClick={this.changeVisible}>Change</button></div>
            </div>
        );
    }
}

export default PoweredBy;