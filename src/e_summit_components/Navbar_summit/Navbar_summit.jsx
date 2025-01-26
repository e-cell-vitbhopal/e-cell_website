import React from "react";
import "./navbar_summit.css";
import Logo from '../../images/ecell-logo-dark.png';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

const Navbar_summit = () => {
  return (
    <div className='summit-navbar summit-navbar-expand-lg summit-flex'>
     <a href="https://www.ecellvitbhopal.in/"><img className='summit-logo summit-logo-summit' src={Logo} alt='ecell' /> </a> 
      <button className="summit-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#summit-navbarNavDropdown">
        <IconContext.Provider value={{ color: "#FFF", size: '20px' }}>
          <HiOutlineMenuAlt1 />
        </IconContext.Provider>
      </button>
      <div className="summit-collapse summit-navbar-collapse-end" id="summit-navbarNavDropdown">
        <div className='summit-navbar-items summit-flex'>
          <div className='summit-navbar-items-a'><a className='summit-navbar-links summit-nav-link-font' href='#'>Home</a></div>
          <div className='summit-navbar-items-a'><a className='summit-navbar-links summit-nav-link-font' href='#about'>About</a></div>
          <div className='summit-navbar-items-a'><a className='summit-navbar-links summit-nav-link-font' href='https://www.ecellvitbhopal.in/e_summit_2024/registration'>Events</a></div>
          <div className='summit-navbar-items-a'><a className='summit-navbar-links summit-nav-link-font' href='#sponsors'>Sponsors</a></div>
          <div className='summit-navbar-items-a'><a className='summit-navbar-links summit-nav-link-font' href='#speaker'>Speaker</a></div>
          <div className='summit-navbar-items-a'><a className='summit-navbar-links summit-nav-link-font' href='#contact'>Contact</a></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_summit;
