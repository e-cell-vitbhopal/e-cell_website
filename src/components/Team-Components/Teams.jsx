import TeamCarousel from './TeamCarousel.jsx';
import {
    box1,
    box2,
    marketingTeam,
    salesTeam,
    productTeam,
    customerSupportTeam,
    lastone
} from "../../data/teams-data/teamMembers.js"
import "../../styles/team-styles/teams.css"
import BlurText from "./BlurText";
import TeamMemberLeaders from './Leadership.jsx';
import ClubCoordinators from './ClubCoordinators.jsx';

export default function Teams() {
    return (
        <div className="app" id='team-main'>
            <div className='team-heading-div-web'>
                <div className='team-heading'><BlurText
                    text="Meet Our Team"
                    delay={150}
                    animateBy="words"
                    direction="top"

                    className="text-2xl mb-8"
                /></div>
            </div>
            <div style={{ marginTop: 20 }}>
                <ClubCoordinators />
            </div>
            <div>
                <TeamMemberLeaders />
            </div>
            <div className="teams-grid">
                <div className="team-section">

                    <TeamCarousel members={box1} carouselId={1} />
                </div>

                <div className="team-section">

                    <TeamCarousel members={box2} carouselId={2} />
                </div>

                <div className="team-section">

                    <TeamCarousel members={marketingTeam} carouselId={3} />
                </div>

                <div className="team-section">

                    <TeamCarousel members={salesTeam} carouselId={4} />
                </div>

                <div className="team-section">

                    <TeamCarousel members={productTeam} carouselId={5} />
                </div>

                <div className="team-section">

                    <TeamCarousel members={customerSupportTeam} carouselId={6} />
                </div>
                <div className="team-section">

                    <TeamCarousel members={lastone} carouselId={6} />
                </div>
            </div>
        </div>
    );
}
