import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './NewNavbar.css';
import logo from '../../assets/ecell_logo.png';

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      handleLinkClick();
      setTimeout(() => {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleLinkClick();
  };

  return (
    <nav className="newnav">
      <div className="newnav-container">
        <a href="/" className="newnav-logo" onClick={scrollToTop}>
          <img src={logo} alt="E-Cell VIT Logo" className="logo-image" />
        </a>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`newnav-links ${isOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={scrollToTop}>
            Home
          </a>
          <a href="#events" className="nav-link" onClick={() => scrollToSection('newecell-main-events')}>
            Events
          </a>
          <a href="#initiatives" className="nav-link" onClick={() => scrollToSection('newecell-orbit-sponsors-container')}>
            Teams
          </a>
          <a href="#sponsors" className="nav-link" onClick={() => scrollToSection('newecell-sponsors-section')}>
            Sponsors
          </a>
          <a href="#speakers" className="nav-link" onClick={() => scrollToSection('newecell-speakers-section')}>
            Speakers
          </a>
          <a href="#contact" className="nav-link contact-btn" onClick={() => scrollToSection('newecell-contact-section')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;