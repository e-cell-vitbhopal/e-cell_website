import React from 'react';
import "./speaker_summit.css";
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Speaker images
import Vijendra from '../../images/channels4_profile.jpg';
import Abhay from '../../images/Abhay Yadav.jpg';
import Ruchi from '../../images/Amruta.jpg';
import Amruta from '../../images/ruchi.jpg';
import Shreyas from '../../images/Shreyas.jpg';
import Siddharth from '../../images/Siddharth.jpg';
import Download from '../../images/download.jpeg';

// Speaker data
const speakers = [
  {
    id: 1,
    image: Vijendra,
    name: 'Dr. Vijender Singh Chauhan',
    position: 'Asso. Prof. DU. Interviewer',
    link: 'https://www.ecellvitbhopal.in/e_summit_2024/registration/FireSideChat',
  },
  {
    id: 2,
    image: Abhay,
    name: 'Dr. Abhay Yadav',
    position: 'Founder of Bhopal Angels',
    link: 'https://www.linkedin.com/in/drabhayyadav',
  },
  {
    id: 3,
    image: Amruta,
    name: 'Amruta Shingwekar',
    position: 'Co-Founder Ezeseed',
    link: 'https://www.linkedin.com/in/amruta-shingwekar-av',
  },
  {
    id: 4,
    image: Ruchi,
    name: 'Ruchi Puri',
    position: 'Angel Investor',
    link: 'https://in.linkedin.com/in/ruchi-gulatee-puri-9b59475',
  },
  {
    id: 5,
    image: Shreyas,
    name: 'Shreyas Sharma',
    position: 'Co-Founder Ezeseed',
    link: 'https://www.linkedin.com/in/shreyas-sharma-60437a247',
  },
  {
    id: 6,
    image: Siddharth,
    name: 'Siddharth Pal',
    position: 'Angel Investor',
    link: 'https://www.linkedin.com/in/isiddharthpal/',
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
