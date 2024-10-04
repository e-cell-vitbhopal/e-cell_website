import React from 'react';
import './sponsors_summit.css';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GC from '../../images/GC.png';
import VD from '../../images/VD.jpg';
import BV from '../../images/BV.png';
import SE from '../../images/SE.png';
import FL from '../../images/FL.png';
import TY from '../../images/TY.png';
import SNF from '../../images/SNF.png';
import TOP from '../../images/TOP.png';


const sponsorData = [
  {
    title: 'Study Partner',
    imageSrc: TOP,
    sponsorName: 'Top One Percent',
    sponsorLink: 'https://www.instagram.com/toponepercent.gmatgre/?hl=en',
  },
  {
    title: 'Media Partner',
    imageSrc: SNF,
    sponsorName: 'Startupnews',
    sponsorLink: 'https://www.instagram.com/startupnews.fyi/?hl=en',
  },
  {
    title: 'Travelling Partner',
    imageSrc: TY,
    sponsorName: 'Travelyatri',
    sponsorLink: 'https://www.instagram.com/Travelyaari_India/?hl=en',
  },
  {
    title: 'Finance Partner',
    imageSrc: FL,
    sponsorName: ' Finlatics',
    sponsorLink: 'https://www.instagram.com/finlatics/?hl=en',
  },
  {
    title: 'Knowledge Partner',
    imageSrc: SE,
    sponsorName: ' Stockedge',
    sponsorLink: 'https://www.instagram.com/mystockedge/?hl=en',
  },
  {
    title: 'Merchandise Partner',
    imageSrc: BV,
    sponsorName: 'Bazarville',
    sponsorLink: 'https://www.instagram.com/bazarvilleindia/?hl=en',
  },
  {
    title: 'Energy Partner',
    imageSrc: VD,
    sponsorName: 'VOLD',
    sponsorLink: 'https://www.instagram.com/voldenergydrink/?hl=en',
  },
  {
    title: 'Certification Partner',
    imageSrc: GC,
    sponsorName: 'Give My Certificate',
    sponsorLink: 'https://www.instagram.com/givemycertificate/',
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
