import React from 'react';
import './Footer.css';
import ecellLogo from '../assets/ecell_logo.png';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={ecellLogo} alt="E-Cell Logo" className="footer-logo" />
          <p className="footer-text">
            Entrepreneurship Cell, VIT Bhopal is a student-run organization
            dedicated to promoting the spirit of entrepreneurship among students.
          </p>
          <div className="social-links">
            <a 
              href="https://instagram.com/ecell_vitbhopal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://linkedin.com/company/ecell-vit-bhopal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://youtube.com/@ecellvitbhopal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#events" className="footer-link">Events</a>
            <a href="#sponsors" className="footer-link">Sponsors</a>
            <a href="#speakers" className="footer-link">Speakers</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} E-Cell VIT Bhopal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;