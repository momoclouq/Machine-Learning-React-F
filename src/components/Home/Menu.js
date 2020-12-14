import React from 'react';

class Menu extends React.Component {
    render(){
        return(
            <div className="Menu-Dropdown-Wrapper">
                <button className="Menu-Dropdown-Button">Hover</button>

                <div className="Menu-Dropdown-List">
                    <a className="Menu-Dropdown-Item" href='/'>Home</a>
                    <a className="Menu-Dropdown-Item" href='#'>Simple logistic Regression</a>
                    <a className="Menu-Dropdown-Item" href='#'>K-nearest Neighbors</a>
                    <a className="Menu-Dropdown-Item" href='#'>Neural Network</a>
                    <a className="Menu-Dropdown-Item" href='#'>Simple linear Regression</a>
                    <a className="Menu-Dropdown-Item" href='#'>Clustering</a>
                </div>
            </div>
        );
    }
}

export default Menu;