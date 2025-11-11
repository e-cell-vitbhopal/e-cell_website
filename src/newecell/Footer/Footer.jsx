import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/ecell_logo.png';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      // If section doesn't exist (we're on a different page), navigate to home first
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="ecell-footer">
      <div className="ecell-footer-container">
        <img src={logo} alt="E-Cell VIT Bhopal" className="ecell-footer-logo" />

        <p className="ecell-footer-description">
          Empowering tomorrow's entrepreneurs through innovation, education, and networking.
        </p>

        <div className="ecell-footer-links">
          <a href="#" className="ecell-footer-link" onClick={scrollToTop}>
            Home
          </a>
          <a href="#events" className="ecell-footer-link" onClick={() => scrollToSection('newecell-main-events')}>
            Events
          </a>
          <a href="#initiatives" className="ecell-footer-link" onClick={() => scrollToSection('newecell-orbit-sponsors-container')}>
            Teams
          </a>
          <a href="#sponsors" className="ecell-footer-link" onClick={() => scrollToSection('newecell-sponsors-section')}>
            Sponsors
          </a>
          <a href="#speakers" className="ecell-footer-link" onClick={() => scrollToSection('newecell-speakers-section')}>
            Speakers
          </a>
          <Link to="/blog" className="ecell-footer-link">
            Blogs
          </Link>
        </div>

        {/* <div className="ecell-social-links">
          <a href="https://www.instagram.com/ecell_vit.bhopal/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/company/e-cell-vit-bhopal/mycompany/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/ecell_vitb" target="_blank" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
        </div> */}
      </div>

      <div className="ecell-footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Cell VIT Bhopal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;