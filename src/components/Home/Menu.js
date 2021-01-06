import React from 'react';
import {Component} from "react";

//Link for react-router
import {Link} from "react-router-dom";

//icon for dropdown menu
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu_open: false
        }
    }

    componentDidMount() {
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        const dropdown = document.querySelector('.dropdown');

        dropdown.addEventListener('click', function(event) {
            console.log('focused');
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
        });

        document.addEventListener('click', function(event){
            console.log('out');
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
        });
    }

    render() {
        return (
            <div className="dropdown" style={{margin: "50px"}}>
                <div className="dropdown-trigger">
                    <button className="button menu-button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span><FontAwesomeIcon icon={faBars} size="2x"/></span>
                    </button>
                </div>
    
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <Link to="/" className="dropdown-item">
                            Home
                        </Link>
                        <Link to="/chapter1" className="dropdown-item">
                            Chapter 1: Linear regression
                        </Link>
                        <Link to="/chapter2" className="dropdown-item">
                            Chapter 2: Logistic regression
                        </Link>
                        <Link to="/chapter3" className="dropdown-item">
                            Chapter 3: Neural Network
                        </Link>
                        <Link to="/chapter4" className="dropdown-item">
                            Chapter 4: Object Detection
                        </Link>
                        <Link to="/chapter5" className="dropdown-item">
                            Chapter 5: K Nearest Neighbors
                        </Link>
                        <Link to="/chapter6" className="dropdown-item">
                            Chapter 6: K Mean clustering
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu;