import React from 'react';
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Header;