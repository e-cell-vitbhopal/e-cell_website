import React from 'react';
import './recruitment.css';

function RecTeamCard(props) {
  const handleClick = () => {
    window.location.href = props.link;
  };

  return (
    <div className='teams-card flex ecell-recruitment-team-card' onClick={handleClick}>
      <h3>{props.name}</h3>
      <h3>Team</h3>
      <div className='ecell-recruitment-bg-light ecell-recruitment-card-bg-light'></div>
    </div>
  );
}

export default RecTeamCard;