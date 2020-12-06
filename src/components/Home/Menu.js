import React from 'react';

class Menu extends React.Component {
    render(){
        return(
            <div className="Menu-Dropdown-Wrapper">
                <button class="Menu-Dropdown-Button">Hover</button>

                <div className="Menu-Dropdown-List">
                    <a className="Menu-Dropdown-Item" href='/'>Home</a>
                    <a className="Menu-Dropdown-Item" href='#'>algorithm 1</a>
                    <a className="Menu-Dropdown-Item" href='#'>algorithm 2</a>
                </div>
            </div>
        );
    }
}

export default Menu;