import React from 'react';
import "./speaker_summit.css";

// Speaker images
import Mitresh from '../../images/mitresh.jpeg';
import Punit from '../../images/PUNIT.png';
import Ruchi from '../../images/Amruta.jpg';
import Srijan from '../../images/srijan.jpeg';

// Speaker data
const speakers = [
  {
    id: 1,
    image: Mitresh,
    name: 'Mitresh Sharma',
    position: 'FIRST BUD ORGANIC Founder',
    link: 'https://www.linkedin.com/in/mitreshsharma/?originalSubdomain=in',
  },
  {
    id: 2,
    image: Punit,
    name: 'Punit G.',
    position: 'ARTH NIRMITI CEO ',
    link: 'https://www.linkedin.com/in/drpunitg/?originalSubdomain=in',
  },
  {
    id: 3,
    image: Srijan,
    name: 'Srijan Mehrotra',
    position: 'MODELVERSE Founder',
    link: 'https://www.linkedin.com/in/srijan-mehrotra-01b18b2b8/?originalSubdomain=in',
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

function Speaker_summit() {
  return (
    <section id="speaker">
      <div className="speaker-text">
        <h2>Our Guests</h2>
      </div>
      <div className="speaker-container">
        {speakers.map((speaker) => (
          <Speaker key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  );
}

export default Speaker_summit;
