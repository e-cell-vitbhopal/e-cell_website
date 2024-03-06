import React from 'react';
import './footer.css';
import FooterImage from '../../images/footer-image.png';
import Logo from '../../images/ecell-logo-dark.png';
import { IconContext } from 'react-icons';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer-container'>
      <img className='footer-background' src={FooterImage} alt=''/>
      <div className='footer flex'>
        <img className="footer-logo" src={Logo} alt='logo'/>
        <p>© Ecell VIT Bhopal</p>
        <div className='social-media-container'>
        <IconContext.Provider value={{ className: "footer-social-icon", size: '30px' }}>
         <a className='footer_links' href='https://www.instagram.com/ecell_vit.bhopal/' target="_blank"> <FaInstagram /></a>
         <a className='footer_links' href='https://www.linkedin.com/company/e-cell-vit-bhopal/mycompany/' target="_blank"> <FaLinkedin /></a>
         <a className='footer_links' href='https://twitter.com/ecell_vitb' target="_blank"> <FaXTwitter /></a>
        </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
