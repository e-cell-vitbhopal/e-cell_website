import React from 'react';
import './sponsors_summit.css';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Notebook from '../../images/NB.png';
import SG from '../../images/SG.png';
import BL from '../../images/blue learn.jpg';
import CT from '../../images/CT.png';
import notion from '../../images/Notion.png';
import ST from '../../images/ST.jpg';
import unstop from '../../images/unstop.png';
import FN from '../../images/FN.jpg';

const sponsorData = [
  {
    src: notion,
    link: 'https://www.instagram.com/notionhq?igsh=MTZ4emZ2ZTd1MDlwMg==',
    alt: 'Notion',
    name: 'Notion',
  },
  {
    src: SG,
    link: 'https://www.instagram.com/stock_gro?igsh=aDZuM2VrMTEyaHZ2',
    alt: 'Stock Gro',
    name: 'Stock Gro', 
  },
  {
    src: BL,
    link: 'https://www.instagram.com/bluelearn.in?igsh=bWh3cmZkcWNpZ2c5',
    alt: 'Blue Learn',
    name: 'Blue Learn', 
  },
  {
    src: unstop,
    link: 'https://www.instagram.com/unstop.world?igsh=cmFneHB6bDk4Mzdk',
    alt: 'unstop',
    name: 'Unstop', 
  },
  {
    src: Notebook,
    link: 'https://www.instagram.com/noticebardofficial?igsh=eDJmYTN0dm12MDQy',
    alt: 'NB',
    name: 'NoticeBard', 
  },
  {
    src: ST,
    link: 'https://www.instagram.com/startup_talky?igsh=dWxwYmp5NWF2ZzFp5',
    alt: 'ST',
    name: 'Startup Talky', 
  },
  {
    src: CT,
    link: 'https://www.instagram.com/campustimes.pune?igsh=NjU2NWNiYnZ6bWY0',
    alt: 'CT',
    name: 'Campus Times',
  },
  {
    src: FN,
    link: 'https://www.instagram.com/finlatics?igsh=cTY1c3o3dW50azE1',
    alt: 'FN',
    name: 'Finlatics',
  },
];


function Sponsors_summit() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div id="sponsors">
      <div className="sponsor-text">
        <h2>SPONSORS</h2>
      </div>
      {isMobile ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
        >
          {sponsorData.map((sponsor, index) => (
            <div key={index}>
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <p className="sponsor-name">{sponsor.name}
                <img src={sponsor.src} className="ellipse" alt={sponsor.alt} />
                </p>
              </a>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="ellipse-container">
          {sponsorData.map((sponsor, index) => (
            <div key={index} >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.src} className="ellipse" alt={sponsor.alt} />
                  <p className="sponsor-name">{sponsor.name}</p> 
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sponsors_summit;