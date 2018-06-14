import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props => {
    const navStyle = {
        padding: '0 10px',
        
    }
    return (
        <nav style={navStyle} className="blue">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Chatterbait</Link>

                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/chat-rooms">Chat Rooms</Link>
                    </li>
                    <li>
                        <Link to="/create-room">Create Chat Room</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Nav;