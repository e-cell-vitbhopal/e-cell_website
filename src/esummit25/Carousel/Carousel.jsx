import React from "react";
import "../../styles/sponsor-styles/sponsors.css"
import { sponsors } from "../../data/sponsors";
import { shuffleArray } from "../../utils/arrayUtils";

const SponsorCard = ({ sponsor }) => (
    <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="card-sponsor"
    >
        <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="sponsor-logo"
        />
        <div className="sponsor-name_main">{sponsor.name}</div>
    </a>
);

const Carousel = () => {
    // Split sponsors into two equal groups
    const shuffledSponsors = shuffleArray([...sponsors]);
    const halfLength = Math.ceil(shuffledSponsors.length / 2);
    const topRowSponsors = shuffledSponsors.slice(0, halfLength);
    const bottomRowSponsors = shuffledSponsors.slice(halfLength);

    return (
        <div className="sponsors-main" id="sponsors-main" style={{ position: 'relative', zIndex: 1 }}>
            
            <div className="carousel">
                <div className="group">
                    {topRowSponsors.map((sponsor) => (
                        <SponsorCard key={sponsor.id} sponsor={sponsor} />
                    ))}
                </div>
                <div className="group" aria-hidden="true">
                    {topRowSponsors.map((sponsor) => (
                        <SponsorCard key={`${sponsor.id}-clone`} sponsor={sponsor} />
                    ))}
                </div>
            </div>

            <div className="carousel reverse">
                <div className="group">
                    {bottomRowSponsors.map((sponsor) => (
                        <SponsorCard key={sponsor.id} sponsor={sponsor} />
                    ))}
                </div>
                <div className="group" aria-hidden="true">
                    {bottomRowSponsors.map((sponsor) => (
                        <SponsorCard key={`${sponsor.id}-clone`} sponsor={sponsor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;