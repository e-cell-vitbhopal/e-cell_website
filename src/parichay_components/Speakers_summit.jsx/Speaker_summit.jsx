import React from 'react';
import "./speaker_summit.css";
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Speaker images
import Metersh_sharma from '../../images/Metersh_sharma.jpg';
//import Abhay from '../../images/Abhay Yadav.jpg';
//import Ruchi from '../../images/Amruta.jpg';
//mport Amruta from '../../images/ruchi.jpg';
////import Shreyas from '../../images/Shreyas.jpg';
//import Siddharth from '../../images/Siddharth.jpg';
// import Download from '../../images/download.jpeg';

// Speaker data
const speakers = [
  {
    id: 1,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 2,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 3,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 3,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 4,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 5,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  
  {
    id: 6,
    image: Metersh_sharma,
    name: 'Metrsh sharma',
    position: 'https://www.linkedin.com/in/mitreshsharma/',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  

];

// Reusable component for a speaker card
function Speaker({ image, name, position, link }) {
  return (
    <a href={link || '#'}>
      <div className="image-container">
        <img src={image} alt={name} className="image" />
        <div className="color-rectangle">
          <div className="name-text">{name}</div>
          <div className="position-text">{position}</div>
        </div>
      </div>
    </a>
  );
}

// Marquee component for infinity scrolling
function Marquee({ children }) {
  return (
    <div className="marquee">
      <div className="marquee-content">{children}</div>
      <div className="marquee-content">{children}</div>
    </div>
  );
}

function Speaker_summit() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <section id="speaker">
      <div className="speaker-text">
        <h2>{isMobile ? 'Our Guests' : 'Our Guests'}</h2>
      </div>
      <div className="speaker-container">
        {isMobile ? (
          <Carousel>
            {speakers.map((speaker) => (
              <Speaker key={speaker.id} {...speaker} />
            ))}
          </Carousel>
        ) : (
          <Marquee>
            {speakers.map((speaker) => (
              <Speaker key={speaker.id} {...speaker} />
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
}

export default Speaker_summit;
