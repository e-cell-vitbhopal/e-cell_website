import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Speakers.css";

import abhayYadav from '../../assets/speakers-images/Abhay Yadav.png';
import ankitaSaxena from '../../assets/speakers-images/Ankita Saxena.png';
import deveshB from '../../assets/speakers-images/Devesh B.png';
import kafiKhan from '../../assets/speakers-images/Kafi Khan.png';
import mitresh from '../../assets/speakers-images/Mitresh.png';
import punitG from '../../assets/speakers-images/Punit G.png';
import rakhi from '../../assets/speakers-images/Rakhi.png';
import srijan from '../../assets/speakers-images/Srijan.png';

// Import LinkedIn icon
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const speakers = [
  {
    name: "Dr. Abhay Yadav",
    designation: "Co-Founder & CEO, Bhopal Angels | Angel Investor",
    event: "E-Summit 24",
    linkedin: "https://www.linkedin.com/in/drabhayyadav/",
    image: abhayYadav
  },
  {
    name: "Ankita Saxena",
    designation: "Marketing Champion | Strategy | Communication | Ex-Walmart | Ex-Spencer's",
    event: "Prachar 22",
    linkedin: "https://www.linkedin.com/in/saxenankita-buildingstrategy/",
    image: ankitaSaxena
  },
  {
    name: "Devesh Bochre",
    designation: "Founder, Vold Energy Asia Pvt Ltd (As Seen On Shark Tank India S3)",
    event: "Parichay 24",
    linkedin: "https://www.linkedin.com/in/devesh-bochre/",
    image: deveshB
  },
  {
    name: "Kaif Khan",
    designation: "Stand-Up Comedian",
    event: "Prachar 22",
    linkedin: null, 
    image: kafiKhan
  },
  {
    name: "Mitresh Sharma",
    designation: "Founder, First Bud Organics (As Seen On Shark Tank India S3) | Food & Agribusiness",
    event: "Parichay 24",
    linkedin: "https://www.linkedin.com/in/mitreshsharma/?originalSubdomain=in",
    image: mitresh
  },
  {
    name: "Punit G",
    designation: "CEO - ArthNirmiti | CXO - Choice International Ltd | Ex-VP @ OYO | TEDx Speaker | IIM-A Alumnus",
    event: "Parichay 24",
    linkedin: "https://www.linkedin.com/in/drpunitg/",
    image: punitG
  },
  {
    name: "Rakhi Pal",
    designation: "Co-Founder at EventBeep - India's Largest Student Community | TEDx | Shark Tank India",
    event: "Arohan",
    linkedin: "https://www.linkedin.com/in/rakhipal/",
    image: rakhi
  },
  {
    name: "Srijan Mehrotra",
    designation: "AI Engineer | Building Model Verse | Gen AI Developer (As Seen on Shark Tank India S3)",
    event: "Parichay 24",
    linkedin: "https://www.linkedin.com/in/srijan-mehrotra-01b18b2b8/",
    image: srijan
  }
];




const Speakers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="speakers-section">
      <h2 className="speakers-title">Past Speakers</h2>
      <div className="speakers-carousel">
        <Slider {...settings}>
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-slide">
              <div className="speaker-image-container">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-image"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">{speaker.designation}</p>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <Linkedin className="linkedin-icon" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Speakers;
