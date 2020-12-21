import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class ScrollToTop extends Component{
    componentDidUpdate(){
        this.scrollToTop();
    }

    scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });
    }

    render(){
        return null;
    }
}

export default withRouter(ScrollToTop);