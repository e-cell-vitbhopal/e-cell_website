import React from 'react';

import '../../styles/dashboard-styles/navbar.css';
import NavLogo from './NavLogo';
import Header from './Header';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLogo />
            <div className="navbar-right">
                <Header />
                <MobileMenu />
            </div>
        </nav>
    );
};

export default Navbar;