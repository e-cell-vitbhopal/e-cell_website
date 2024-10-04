import React from 'react';
import './summit - Copy.css'
import Navbar_summit from './Parichay/Navbar_summit/Navbar_summit.jsx';
import Dashboard_summit from './Parichay/Dashboard_summit/Dashboard_summit.jsx';
import About_summit from './Parichay/About_summit/About_summit';
import Sponsors_summit from './Parichay/Sponsors_summit/Sponsors_summit';
import Speaker_summit from './Parichay/Speakers_summit.jsx/Speaker_summit';
import Contact_summit from './Parichay/Contact_summit/Contact_summit';
import Event_summit from './Parichay/Event_summit/Event_summit';


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
