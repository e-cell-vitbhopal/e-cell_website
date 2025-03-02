import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/ecell_logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__column">
            <div className="footer_img">
              <img src ={logo}></img>
            </div>
            <h3 className="footer__logo">Startup Expo</h3>
            <p className="footer__description">
              The premier event connecting innovators, investors, and industry leaders to shape the future of technology and business.
            </p>
          </div>
          
          
          
         
          
          
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} E-cell VIT Bhopal. All rights reserved.
          </p>
          <div className="footer__social">
                <a href="https://x.com/ecell_vitb" className="contact__social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/ecell_vit.bhopal/" className="contact__social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/e-cell-vit-bhopal/" className="contact__social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;