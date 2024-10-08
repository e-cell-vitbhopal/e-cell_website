import React from 'react';
import './sponsors_summit.css';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Top from '../../images/top_one.png';
import SE from '../../images/stockedge.png';
import SU from '../../images/startupnews.jpg';
import Interview from '../../images/interbud.jpg';
import Certificate from '../../images/certi.png';
import Travel from '../../images/yatri.jpg';
import FN from '../../images/FN.jpg';
import Notebook from '../../images/NB.png';
import VD from '../../images/vold.jpeg';
import BV from '../../images/BV.png'

const sponsorData = [
  {
    title: 'Study Partners',
    imageSrc: Top,
    sponsorName: 'Top One Percent',
    sponsorLink: 'https://www.top-one-percent.com/',
  },
  {
    title: 'Knowledge Partner',
    imageSrc: SE,
    sponsorName: 'Stock Edge',
    sponsorLink: 'https://stockedge.com/',
  },
  {
    title: 'Media Partner',
    imageSrc: SU,
    sponsorName: 'StartupNews',
    sponsorLink: 'https://startupnews.fyi/',
  },
  {
    title: 'Energy Partner',
    imageSrc: VD,
    sponsorName: 'VOLD',
    sponsorLink: 'https://www.voldenergy.in/',
  },
  {
    title: 'Travelling Partner',
    imageSrc: Travel,
    sponsorName: 'Travel yatri',
    sponsorLink: 'https://travelyatri.online/',
  },
  {
    title: 'Finance Partner',
    imageSrc: FN,
    sponsorName: 'Finlatics',
    sponsorLink: 'https://www.finlatics.com/',
  },
  // New sponsor 1
  {
    title: 'Educational Partner',
    imageSrc: Interview,
    sponsorName: 'Interview Buddy',
    sponsorLink: 'https://interviewbuddy.net/',
  },
  // New sponsor 2
  {
    title: 'Certification Partner',
    imageSrc: Certificate,
    sponsorName: 'Give My Certificate',
    sponsorLink: 'https://givemycertificate.com/',
  },
  {
    title: 'Merchandise Partner',
    imageSrc: BV,
    sponsorName: 'BazarVille',
    sponsorLink: 'https://bazarville.com/',
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
);

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
            <SponsorSection sectionTitle="Study Partner" sponsors={[sponsorData[0]]} />
            <SponsorSection sectionTitle="Knowledge Partner" sponsors={[sponsorData[1]]} />
            <SponsorSection1 sectionTitle="Media Partner" sponsors={sponsorData.slice(2, 3)} />
          </div>
          <div className='horizontal-flex'>
            <SponsorSection sectionTitle="Travelling Partner" sponsors={[sponsorData[4]]} />
            <SponsorSection1 sectionTitle="Finance Partner" sponsors={[sponsorData[5]]} />
            <SponsorSection sectionTitle="Energy Partner" sponsors={[sponsorData[3]]} />
          </div>
          <div className='horizontal-flex'>
            {/* New sponsor sections */}
            <SponsorSection1 sectionTitle="Educational Partner" sponsors={[sponsorData[6]]} />
            <SponsorSection sectionTitle="Certification Partner" sponsors={[sponsorData[7]]} />
            <SponsorSection sectionTitle="Merchandise Partner" sponsors={[sponsorData[8]]} />
          </div>
        </>
      )}
    </div>
  );
}

export default SponsorsSummit;
