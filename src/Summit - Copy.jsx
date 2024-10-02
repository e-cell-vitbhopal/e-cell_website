import React from 'react';
import './summit - Copy.css'
import Navbar_summit from './e_summit_components - Copy/Navbar_summit/Navbar_summit.jsx';
import Dashboard_summit from './e_summit_components - Copy/Dashboard_summit/Dashboard_summit.jsx';
import About_summit from './e_summit_components - Copy/About_summit/About_summit';
import Sponsors_summit from './e_summit_components - Copy/Sponsors_summit/Sponsors_summit';
import Speaker_summit from './e_summit_components - Copy/Speakers_summit.jsx/Speaker_summit';
import Contact_summit from './e_summit_components - Copy/Contact_summit/Contact_summit';
import Event_summit from './e_summit_components - Copy/Event_summit/Event_summit';


function Summit_copy() {
  return (
    <div className='summit_body_copy'>
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

export default Summit_copy;
