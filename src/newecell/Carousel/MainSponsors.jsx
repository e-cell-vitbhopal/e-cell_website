import React from "react";
import "./MainSponsors.css";
import { sponsors } from "../../data/sponsors";
import { shuffleArray } from "../../utils/arrayUtils";

const SponsorCard = ({ sponsor }) => (
  <a 
    href={sponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    className="unique-card"
  >
    <div className="unique-sponsor-content">
      <img 
        src={sponsor.logo} 
        alt={`${sponsor.name} logo`} 
        className="unique-sponsor-logo"
      />
      <div className="unique-sponsor-name">
        {sponsor.name}
      </div>
    </div>
  </a>
);

const MainSponsors = () => {
  const shuffledSponsors = shuffleArray([...sponsors]);
  const halfLength = Math.ceil(shuffledSponsors.length / 2);
  const topRowSponsors = shuffledSponsors.slice(0, halfLength);
  const bottomRowSponsors = shuffledSponsors.slice(halfLength);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="unique-sponsors-title">Sponsors</h2>
      <div className="unique-carousel">
        <div className="unique-group">
          {topRowSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
        <div className="unique-group" aria-hidden="true">
          {topRowSponsors.map((sponsor) => (
            <SponsorCard key={`${sponsor.id}-clone`} sponsor={sponsor} />
          ))}
        </div>
      </div>
      
      <div className="unique-carousel unique-reverse">
        <div className="unique-group">
          {bottomRowSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
        <div className="unique-group" aria-hidden="true">
          {bottomRowSponsors.map((sponsor) => (
            <SponsorCard key={`${sponsor.id}-clone`} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSponsors;
