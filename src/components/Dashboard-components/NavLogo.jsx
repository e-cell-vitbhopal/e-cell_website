import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/dashboard-styles/navlogo.css';

const NavLogo = () => {
    return (
        <div className="nav-logo">
            <Link to="/">
                <h1>E-CELL</h1>
            </Link>
        </div>
    );
};

export default NavLogo;