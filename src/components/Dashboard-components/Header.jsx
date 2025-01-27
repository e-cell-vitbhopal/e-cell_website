import React from 'react';
import { navigationLinks } from '../../utils/navigationUtils';
import '../../styles/dashboard-styles/header.css';

const Header = () => {
    return (
        <ul className="nav-links">
            {navigationLinks.map((link) => (
                <li key={link.to}>
                    <a
                        href={link.to}
                        onClick={(e) => {
                            e.preventDefault();
                            link.action();
                        }}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Header;