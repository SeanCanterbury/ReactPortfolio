import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navbar.css";

function Navbar() {
    return (<div className="Navbar">
        <div className = "toggleButton">
            <button></button>
        </div>
        <div className = "Links">
            <Link to = "/"> Home </Link>
            <Link to = "/projects"> Projects </Link>
        </div>
    </div>);
}

export default Navbar;