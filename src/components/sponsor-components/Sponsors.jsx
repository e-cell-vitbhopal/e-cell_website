import React from "react";
import "../../styles/sponsor-styles/sponsors.css"
import { sponsors } from "../../data/sponsors";
import { shuffleArray } from "../../utils/arrayUtils";
import SplitText from "./SplitText";
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

const Sponsors = () => {
    // Split sponsors into two equal groups
    const shuffledSponsors = shuffleArray([...sponsors]);
    const halfLength = Math.ceil(shuffledSponsors.length / 2);
    const topRowSponsors = shuffledSponsors.slice(0, halfLength);
    const bottomRowSponsors = shuffledSponsors.slice(halfLength);

    return (
        <div className="sponsors-main" id="sponsors-main" style={{ position: 'relative', zIndex: 1 }}>
            <div className="sponsors-heading"><SplitText
                text="Sponsors"
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
            /></div>
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

export default Sponsors;