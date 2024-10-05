import React from 'react';
import './sponsors_summit.css';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Top from '../../images/top_one.png';
import SE from '../../images/stockedge.png';
import SU from '../../images/startupnews.jpg';
import CT from '../../images/CT.png';
import ST from '../../images/ST.jpg';
import Travel from '../../images/travelyatri.png';
import FN from '../../images/FN.jpg';
import Notebook from '../../images/NB.png';
import IS from '../../images/IS.png';

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
    title: 'Education Partner',
    imageSrc: IS,
    sponsorName: 'Insternshala',
    sponsorLink: 'https://www.instagram.com/internshala?igsh=MXR6NjMwcThhMXNvOQ==',
  },
  {
    title: 'Travelling Partner',
    imageSrc: Travel,
    sponsorName: 'Travel yatri',
    sponsorLink: 'http://travelyatri.net.in/',
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
            <SponsorSection sectionTitle="Study Partner" sponsors={[sponsorData[0]]} />
            <SponsorSection sectionTitle="Knowledge Partner" sponsors={[sponsorData[1]]} />
            <SponsorSection1 sectionTitle="Media Partner" sponsors={sponsorData.slice(2,3)} />
          </div>
          <div className='horizontal-flex'>
            {/* <SponsorSection1 sectionTitle="Media Partners" sponsors={sponsorData.slice(5,8)} /> */}
            <SponsorSection sectionTitle="Travelling Partner" sponsors={[sponsorData[4]]} />
            <SponsorSection sectionTitle="Finance Partner" sponsors={[sponsorData[8]]} />
          </div>
        </>
      )}
    </div>
  );
}

export default SponsorsSummit;
