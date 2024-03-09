import React from 'react';
import './recruitment.css';

function RecTeamCard(props) {
  return (
    <div className='teams-card flex'>
      <h3>{props.name}</h3>
      <h3>Team</h3>
    </div>
  )
}

export default RecTeamCard
