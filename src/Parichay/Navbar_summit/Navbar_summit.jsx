import React from "react";
import "./navbar_summit.css";
import Logo from '../../images/ecell-logo-dark.png';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

const Navbar_summit = () => {
  return (
    <div className='navbar navbar-expand-lg flex'>
     <a href="https://www.ecellvitbhopal.in/"><img className='logo logo_summit' src={Logo} alt='ecell' /> </a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <IconContext.Provider value={{ color: "#FFF", size: '20px' }}>
          <HiOutlineMenuAlt1 />
        </IconContext.Provider>
      </button>
      <div className="collapse navbar-collapse navbar_collapse_end" id="navbarNavDropdown">
        <div className='navbar-items flex'>
          <div className='navbar-items_a'><a className='Navbar_links nav_link_font' href='#'>Home</a></div>
          <div className='navbar-items_a'><a className='Navbar_links nav_link_font' href='#about'>About</a></div>
          <div className='navbar-items_a'><a className='Navbar_links nav_link_font' href='#sponsors'>Sponsors</a></div>
          <div className='navbar-items_a'><a className='Navbar_links nav_link_font' href='#speaker'>Speaker</a></div>
          <div className='navbar-items_a'><a className='Navbar_links nav_link_font' href='#contact'>Contact</a></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_summit;
