import React from 'react';
import '../../styles/team-styles/TeamMemberSection.css';
import img_cd_1 from "../../assets/teams-images/Bhakti Parashar.png"
import img_cd_2 from "../../assets/teams-images/Mr_Margatrajan.jpg"

const ClubCoordinators = () => {
    const members = [
        {
            name: 'Dr. Bhakti Parashar',
            position: 'Faculty Coordinator',
            image: img_cd_1,
        },
        {
            name: 'Dr. M Maragatharajan',
            position: 'Faculty Coordinator',
            image: img_cd_2,
        },
    ];

    return (
        <div className="team-member-section">
            <div className="team-row">
                {members.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.image} alt={member.name} className="member-image" />
                        <div className="member-details">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClubCoordinators;
