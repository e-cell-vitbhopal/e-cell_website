import React from 'react';
import './recruitment.css';

function RecTeamCard(props) {
  let handleClick = (()=>{
    window.location.href = props.link;
  })

  return (
    <div className='teams-card flex rec-team-card' onClick={handleClick}>
      <h3>{props.name}</h3>
      <h3>Team</h3>
    </div>
  )
}

export default RecTeamCard
