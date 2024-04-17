import React from 'react';
import "./speaker_summit.css";
import Ishan from '../../images/FR5jHQ_VEAAsU_m.webp'
import Vijendra from '../../images/channels4_profile.jpg'
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Download from '../../images/download.jpeg';


function Speaker_summit() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  if (isMobile) {
  return (
    <section id='speaker'>
      <div className="speaker-text">
        <h2>SPEAKERS</h2>
      </div>
      <div className="speaker-container">
      <Carousel>
        <div className="image-container">
          <img src={Download} className="image" />
          <div className="color-rectangle">
            <div className="name-text">Revealing Soon</div>
            <div className="position-text">Revealing Soon</div>
          </div>
        </div>
        <div className="image-container">
          <img src={Download} className="image" />
          <div className="color-rectangle">
            <div className="name-text">Revealing Soon</div>
            <div className="position-text">Revealing Soon</div>
          </div>
        </div>
        <div className="image-container">
          <img src={Download} className="image" />
          <div className="color-rectangle">
            <div className="name-text">Revealing Soon</div>
            <div className="position-text">CEO and Founder</div>
          </div>
        </div>
        </Carousel>
      </div>
    </section>
  );
} else { 
  return(
  <div id='speaker'>
  <div className="speaker-text">
    <h2>SPEAKERS</h2>
  </div>
  <div className="speaker-container">
    <div className="image-container">
      <img src={Download} className="image" />
      <div className="color-rectangle">
        <div className="name-text">Revealing Soon</div>
        <div className="position-text">Revealing Soon</div>
      </div>
    </div>
    <div className="image-container">
      <img src={Download} className="image" />
      <div className="color-rectangle">
        <div className="name-text">Revealing Soon</div>
        <div className="position-text">Revealing Soon</div>
      </div>
    </div>
    <div className="image-container">
      <img src={Download} className="image" />
      <div className="color-rectangle">
        <div className="name-text">Revealing Soon</div>
        <div className="position-text">CEO and Founder</div>
      </div>
    </div>
  </div>
  </div>
);
 }
 }

export default Speaker_summit;
