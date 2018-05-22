import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props => {
    const navStyle = {
        padding: '0 10px',
        
    }
    return (
        <nav style={navStyle} className="blue">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Chatterbate</Link>

                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chat">Chat</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;