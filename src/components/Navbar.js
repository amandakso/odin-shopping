import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <li ><Link className="nav-link" to="/">Home</Link></li>
                <li ><Link className="nav-link" to="/shop">Shop</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;