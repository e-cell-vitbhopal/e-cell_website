import React from 'react';
import './sponsors_summit.css'; 
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Notebook from '../../images/NB.jpg'
import SG from '../../images/SG.png'
import BL from '../../images/blue learn.jpg'


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
        <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/stock_gro?igsh=aDZuM2VrMTEyaHZ2'><img className='img_sponser' src={SG}></img></a></div>
        <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/bluelearn.in?igsh=bWh3cmZkcWNpZ2c5'><img className='img_sponser' src={BL}></img></a></div>
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
        <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/noticebardofficial?igsh=aTR5MzEwNmU3Z2Jm'><img className='img_sponser' src={Notebook}></img></a></div>
        <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/stock_gro?igsh=aDZuM2VrMTEyaHZ2'><img className='img_sponser' src={SG}></img></a></div>
        <div className="ellipse hid_sponsor_1"><a href='https://www.instagram.com/bluelearn.in?igsh=bWh3cmZkcWNpZ2c5'><img className='img_sponser' src={BL}></img></a></div>
      </div>
    </div>
  );
}
}

export default Sponsors_summit;
