import React from 'react';
import {Component} from "react";

//Link for react-router
import {Link} from "react-router-dom";

//icon for dropdown menu
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons";


class Menu extends Component {
    render(){
        return(
            <div className="Menu-Dropdown-Wrapper">
                <div className="Menu-Dropdown-Button"><FontAwesomeIcon icon={faAlignLeft} size="2x"/></div>

                <div className="Menu-Dropdown-List">
                    <Link className="Menu-Dropdown-Item" to='/'>Home</Link>
                    <Link className="Menu-Dropdown-Item" to="/chapter1">Simple linear Regression</Link>
                    <Link className="Menu-Dropdown-Item" to="/chapter2">Simple logistic Regression</Link>
                    <Link className="Menu-Dropdown-Item" to="/chapter3">Neural Network</Link>
                    <Link className="Menu-Dropdown-Item" to="/chapter4">Object Detection</Link>
                    <Link className="Menu-Dropdown-Item" to="/chapter5">K-nearest Neighbors</Link>
                    <Link className="Menu-Dropdown-Item" to="/chapter6">Clustering</Link>
                    
                </div>
            </div>
        );
    }
}

export default Menu;