import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/tuto">Tutorials</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
