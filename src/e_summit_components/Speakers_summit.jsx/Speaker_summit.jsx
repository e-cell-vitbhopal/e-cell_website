import React from 'react';
import "./speaker_summit.css";
//import image from "./image.jpeg";
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Anant from '../../images/anant_dubey.png';


function Speaker_summit() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  if (isMobile) {
  return (
    <section>
      <div className="speaker-text">
        <h2>SPEAKERS</h2>
      </div>
      <div className="speaker-container">
      <Carousel>
        <div className="image-container">
          <img src={Anant} className="image" />
          <div className="color-rectangle">
            <div className="name-text">John Doe</div>
            <div className="position-text">CEO and Founder</div>
          </div>
        </div>
        <div className="image-container">
          <img src={Anant} className="image" />
          <div className="color-rectangle">
            <div className="name-text">John Doe</div>
            <div className="position-text">CEO and Founder</div>
          </div>
        </div>
        <div className="image-container">
          <img src={Anant} className="image" />
          <div className="color-rectangle">
            <div className="name-text">John Doe</div>
            <div className="position-text">CEO and Founder</div>
          </div>
        </div>
        </Carousel>
      </div>
    </section>
  );
} else { 
  return(
  <div>
  <div className="speaker-text">
    <h2>SPEAKERS</h2>
  </div>
  <div className="speaker-container">
    <div className="image-container">
      <img src="" className="image" />
      <div className="color-rectangle">
        <div className="name-text">John Doe</div>
        <div className="position-text">CEO and Founder</div>
      </div>
    </div>
    <div className="image-container">
      <img src="" className="image" />
      <div className="color-rectangle">
        <div className="name-text">John Doe</div>
        <div className="position-text">CEO and Founder</div>
      </div>
    </div>
    <div className="image-container">
      <img src="" className="image" />
      <div className="color-rectangle">
        <div className="name-text">John Doe</div>
        <div className="position-text">CEO and Founder</div>
      </div>
    </div>
  </div>
  </div>
);
 }
 }

export default Speaker_summit;
