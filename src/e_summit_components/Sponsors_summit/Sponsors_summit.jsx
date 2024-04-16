import React from 'react';
import './sponsors_summit.css'; 
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Notebook from '../../images/download__1_-removebg-preview.png'


function Sponsors_summit() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  if (isMobile) {
  return (
    <div id='sponsers'>
      <div className="sponsor-text">
        <h2>SPONSORS</h2>
      </div>
      <div className="ellipse-container">
    
        <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/noticebardofficial?igsh=aTR5MzEwNmU3Z2Jm'><img className='img_sponser' src={Notebook}></img></a></div>

        
      </div>
    </div>
  );
} else {

  return(
    <div id='sponsers'>
    <div className="sponsor-text">
      <h2>SPONSORS</h2>
    </div>
    <div className="ellipse-container">
      <div className="ellipse hid_sponsor"><img className='img_sponser' src={Notebook}></img></div>
      <div className="ellipse hid_sponsor"><img className='img_sponser' src={Notebook}></img></div>
      <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/noticebardofficial?igsh=aTR5MzEwNmU3Z2Jm'><img className='img_sponser' src={Notebook}></img></a></div>
      <div className="ellipse hid_sponsor"><img className='img_sponser' src={Notebook}></img></div>
      <div className="ellipse hid_sponsor"><img className='img_sponser' src={Notebook}></img></div>
    </div>
  </div>
  );

}
}

export default Sponsors_summit;
