import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/dashboard-styles/mobileMenu.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = document.querySelector('.navbar')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const links = [
        {
            to: "/",
            label: "Home",
            onClick: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
            }
        },
        { to: "#main-events", label: "Events", onClick: () => scrollToSection('main-events') },
        { to: "#team-main", label: "Teams", onClick: () => scrollToSection('team-main') },
        { to: "#sponsors-main", label: "Sponsors", onClick: () => scrollToSection('sponsors-main') },
        { to: "#speakers-main", label: "Speakers", onClick: () => scrollToSection('speakers-main') }
    ];

    return (
        <div className="mobile-menu">
            <button
                className="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`mobile-menu-content ${isOpen ? 'open' : ''}`}>
                <ul>
                    {links.map((link) => (
                        <li key={link.to}>
                            <a
                                href={link.to}
                                onClick={(e) => {
                                    e.preventDefault();
                                    link.onClick();
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
