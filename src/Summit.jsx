import React from 'react';
import './summit.css'
import Navbar_summit from './e_summit_components/Navbar_summit/Navbar_summit';
import Dashboard_summit from './e_summit_components/Dashboard_summit/Dashboard_summit';
import About_summit from './e_summit_components/About_summit/About_summit';
import Sponsors_summit from './e_summit_components/Sponsors_summit/Sponsors_summit';
import Speaker_summit from './e_summit_components/Speakers_summit.jsx/Speaker_summit';
import Contact_summit from './e_summit_components/Contact_summit/Contact_summit';
import Event_summit from './e_summit_components/Event_summit/Event_summit';


function Summit() {
  return (
    <div className='summit_body'>
      <Navbar_summit />
      <Dashboard_summit />
      <About_summit />
      <Event_summit />
      <Sponsors_summit />
      <Speaker_summit />
      <Contact_summit />
    </div>
  )
}

export default Summit;
