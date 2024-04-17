import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

import Logo from '../../images/ecell-logo-dark.png';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar navbar-expand-lg flex'>
      <img className='logo' src={Logo} alt='ecell' />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <IconContext.Provider value={{ color: "#FFF", size: '20px' }}>
          <HiOutlineMenuAlt1 />
        </IconContext.Provider>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className='navbar-items flex'>
          <div className='navbar-items_a'><a className='Navbar_links' href='#'>Home</a></div>
          <div className='navbar-items_a'><a className='Navbar_links' href='#About'>About-Us</a></div>
          <div className='navbar-items_a'><a className='Navbar_links' href='#Events'>Events</a></div>
          <div className='navbar-items_a'><a className='Navbar_links' href='https://www.ecellvitbhopal.in/e_summit_2024'>E-summit</a></div>
          <div className='navbar-items_a'><a className='Navbar_links' href='#Contacts'>Contact</a></div>
        </div>
        <button className='join-button' onClick={()=>{navigate('/recruitment')}}>Join now</button>
      </div>
    </div>
  );
}