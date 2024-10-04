import React from 'react';
import "./speaker_summit.css";
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Speaker images
import Sri from '../../images/Sri.jpg';
import Punit from '../../images/Punit.jpg';
import Sharma from '../../images/Sharma.jpg';

// Speaker data
const speakers = [
  {
    id: 1,
    image: Sri,
    name: 'Srijan Mehrotra',
    position: 'MODELVERSE FOUNDER',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 2,
    image: Punit,
    name: 'PUNIT G',
    position: 'TEDX SPEAKER',
    link: 'https://www.linkedin.com/in/drpunitg/?originalSubdomain=in',
  },
  {
    id: 3,
    image: Sharma,
    name: 'MITRESH SHARMA',
    position: 'FIRST BUD ORGANIC, FOUNDER',
    link: 'https://www.linkedin.com/in/mitreshsharma/?originalSubdomain=in',
  }
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
