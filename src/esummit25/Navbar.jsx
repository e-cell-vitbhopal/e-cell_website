import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ecellLogo from "../assets/ecell_logo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;
      const pastHeroSection = currentScrollPos > window.innerHeight * 0.75;

      setVisible(scrollingUp && !pastHeroSection);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${visible ? "" : "navbar-hidden"}`}>
      <img src={ecellLogo} alt="E-Cell Logo" className="logo" />
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMenuOpen(false);
        }}>
          Home
        </li>
        <li className="nav-item" onClick={() => scrollToSection('about')}>
          About Us
        </li>
        <li className="nav-item" onClick={() => scrollToSection('events')}>
          Events
        </li>
        <li className="nav-item" onClick={() => scrollToSection('speakers')}>
          Speakers
        </li>
        <li className="nav-item" onClick={() => scrollToSection('sponsors')}>
          Sponsors
        </li>
        <li className="nav-item" onClick={() => scrollToSection('patrons')}>
          Our Patrons
        </li>
        <li className="nav-item" onClick={() => scrollToSection('contact')}>
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;