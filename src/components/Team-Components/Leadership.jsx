import React from 'react';
import '../../styles/team-styles/TeamMemberSection.css';
import img_President from "../../assets/teams-images/Ayush.jpeg"
import img_secretary from "../../assets/teams-images/Mohit_Upadhay.jpg"
import img_vice_president from "../../assets/teams-images/Aishwarya_tripathi.jpg"

const TeamMemberLeaders = () => {
  const members = [
    {
      name: 'Ayush Mishra',
      position: 'President',
      image: img_President,
    },
    {
      name: 'Aishwarya Tripathi',
      position: 'Vice President',
      image: img_vice_president,
    },
    {
      name: 'Mohit Upadhay',
      position: 'Secretary',
      image: img_secretary,
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

export default TeamMemberLeaders;
