import React, { useState } from 'react';
import './events.css';
import Marquee from 'react-fast-marquee';
import EventsCard from './EventsCard';

export default function Events() {
  const [isPaused, setIsPaused] = useState(false);

  const handleTogglePause = () => {
    setIsPaused(prevState => !prevState);
  };

  return (
    <div id='Events' className='events-container flex'>
      <h2><span className='pink-text'>/</span> Events <span className='pink-text'>/</span></h2>   
      <div className='event-cards flex' onMouseEnter={handleTogglePause} onMouseLeave={handleTogglePause}>
        <Marquee className={`event-cards marquee ${isPaused ? 'paused' : ''}`}>
          
          <EventsCard eventName="AAROHAN" />  
          <EventsCard eventName="PRACHAR" />
          <EventsCard eventName="PARICHAY" />
          <EventsCard eventName="ENTREPRENEUR MEET-UP" />
        </Marquee>
      </div>
    </div>
  )
}
