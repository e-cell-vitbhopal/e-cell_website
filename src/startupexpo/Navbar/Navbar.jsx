import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/ecell_logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`startup-expo-navbar ${isScrolled ? 'startup-expo-navbar--scrolled' : ''}`}>
      <div className="startup-expo-navbar__container">
        <a href="#home" className="startup-expo-navbar__logo">
          <img src={logo} alt="E-Cell Logo" />
        </a>

        {/* Mobile Menu Toggle */}
        <div 
          className="startup-expo-navbar__menu-toggle" 
          onClick={toggleMobileMenu}
        >
          <span className={`startup-expo-navbar__menu-bar ${isMobileMenuOpen ? 'startup-expo-navbar__menu-bar--open' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`startup-expo-navbar__menu ${isMobileMenuOpen ? 'startup-expo-navbar__menu--open' : ''}`}>
          <li className="startup-expo-navbar__item">
            <a href="#home" className="startup-expo-navbar__link">Home</a>
          </li>
          <li className="startup-expo-navbar__item">
            <a href="#about" className="startup-expo-navbar__link">About</a>
          </li>
          <li className="startup-expo-navbar__item">
            <a href="#why-attend" className="startup-expo-navbar__link">Why Attend</a>
          </li>
          <li className="startup-expo-navbar__item">
            <a href="#schedule" className="startup-expo-navbar__link">Schedule</a>
          </li>
          <li className="startup-expo-navbar__item">
            <a href="#passes" className="startup-expo-navbar__link">Passes</a>
          </li>
          <li className="startup-expo-navbar__item">
            <a href="#contact" className="startup-expo-navbar__link">Contact</a>
          </li>
          <li className="startup-expo-navbar__item startup-expo-navbar__item--button">
            <a href="#register" className="startup-expo-navbar__button">Register Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
