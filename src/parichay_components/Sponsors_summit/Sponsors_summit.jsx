import React from 'react';
import './sponsors_summit.css';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Notion from '../../images/Notion.png';
import SG from '../../images/SG.png';
import BL from '../../images/blue_learn.jpg';
import CT from '../../images/CT.png';
import ST from '../../images/ST.jpg';
import Unstop from '../../images/unstop.jpg';
import FN from '../../images/FN.jpg';
import Notebook from '../../images/NB.png';
import IS from '../../images/IS.png';

const sponsorData = [
  {
    title: 'Design Partner',
    imageSrc: Notion,
    sponsorName: 'Notion',
    sponsorLink: 'https://www.instagram.com/notionhq',
  },
  {
    title: 'Trading Partner',
    imageSrc: SG,
    sponsorName: 'Stock Gro',
    sponsorLink: 'https://www.instagram.com/stock_gro',
  },
  {
    title: 'Education Partner',
    imageSrc: BL,
    sponsorName: 'Blue Learn',
    sponsorLink: 'https://www.instagram.com/bluelearn.in',
  },
  {
    title: 'Education Partner',
    imageSrc: IS,
    sponsorName: 'Insternshala',
    sponsorLink: 'https://www.instagram.com/internshala?igsh=MXR6NjMwcThhMXNvOQ==',
  },
  {
    title: 'Platform Partner',
    imageSrc: Unstop,
    sponsorName: 'Unstop',
    sponsorLink: 'https://www.instagram.com/unstop.world',
  },
  {
    title: 'Media Partner',
    imageSrc: Notebook,
    sponsorName: 'NoticeBard',
    sponsorLink: 'https://www.instagram.com/noticebardofficial',
  },
  {
    title: 'Media Partner',
    imageSrc: ST,
    sponsorName: 'Startup Talky',
    sponsorLink: 'https://www.instagram.com/startup_talky',
  },
  {
    title: 'Media Partner',
    imageSrc: CT,
    sponsorName: 'Campus Times',
    sponsorLink: 'https://www.instagram.com/campustimes.pune',
  },
  {
    title: 'Finance Partner',
    imageSrc: FN,
    sponsorName: 'Finlatics',
    sponsorLink: 'https://www.instagram.com/finlatics',
  },
];

const SponsorSection = ({ sectionTitle, sponsors }) => (
  <div className="sponsor-subsection">
    <h3>{sectionTitle}</h3>
    <hr/>
    <div className="sponsor-content">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-item">
          <a href={sponsor.sponsorLink} target="_blank" rel="noopener noreferrer">
            <img src={sponsor.imageSrc} alt={sponsor.sponsorName} className="img-sponsor" />
          </a>
          <p className="sponsor-name">{sponsor.sponsorName}</p>
        </div>
      ))}
    </div>
  </div>
)
const SponsorSection1 = ({ sectionTitle, sponsors }) => (
  <div className="sponsor-subsection1">
    <h3>{sectionTitle}</h3>
    <hr/>
    <div className="sponsor-content">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-item">
          <a href={sponsor.sponsorLink} target="_blank" rel="noopener noreferrer">
            <img src={sponsor.imageSrc} alt={sponsor.sponsorName} className="img-sponsor" />
          </a>
          <p className="sponsor-name">{sponsor.sponsorName}</p>
        </div>
      ))}
    </div>
  </div>
);

function SponsorsSummit() {
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
              <p className="sponsor-name">{sponsor.title}</p>
              <a href={sponsor.sponsorLink} target="_blank" rel="noopener noreferrer">
                
                <img src={sponsor.imageSrc} className="ellipse" alt={sponsor.sponsorName} />
                <p className="sponsor-name1">{sponsor.sponsorName}</p>
              </a>
            </div>
          ))}
        </Carousel>
      ) : (
        <>
          <div className='horizontal-flex'>
            <SponsorSection sectionTitle="Design Partner" sponsors={[sponsorData[0]]} />
            <SponsorSection sectionTitle="Trading Partner" sponsors={[sponsorData[1]]} />
            <SponsorSection1 sectionTitle="Education Partner" sponsors={sponsorData.slice(2,4)} />
          </div>
          <div className='horizontal-flex'>
            <SponsorSection1 sectionTitle="Media Partners" sponsors={sponsorData.slice(5,8)} />
            <SponsorSection sectionTitle="Platform Partner" sponsors={[sponsorData[4]]} />
            <SponsorSection sectionTitle="Finance Partner" sponsors={[sponsorData[8]]} />
          </div>
        </>
      )}
    </div>
  );
}

export default SponsorsSummit;
