import React from 'react';
import './recruitment.css';
import Logo from '../../images/ecell-logo-dark.png';
import RecTeamCard from './RecTeamCard';

function Recruitment() {
  return (
    <div className='recruitment'>
      <div className='recruitment-head'>
        <img className='logo' src={Logo} alt='ecell' />
        <button style={{width: '6vw'}} className='join-button'>Back</button>
      </div>
      <div className='recruitment-content'>
        <div className='rec-con-heading'>
          <p className='club-name'>Entrepreneurship Cell, VIT Bhopal University</p>
          <p className='recruitment-heading'>Idea Alchemists & Team Titans Wanted:  </p>
          <p className='recruitment-heading'>Build Something Epic (2024-25) </p>
        </div>
        
        <div className='rec-con-body'>
          <p>We're recruiting a passionate team for the tenure 2024-25 to fill various positions.</p>
          <p>We're looking for individuals who are:</p>
          <ul>
            <li><span className='pink-text'>Idea generators:</span> You see opportunities where others see problems.</li>
            <li><span className='pink-text'>Problem solvers:</span> You have a knack for dissecting challenges and crafting innovative solutions.</li>
            <li><span className='pink-text'>Team players:</span> Collaboration is key! You thrive in a supportive environment and work effectively with diverse personalities.</li>
            <li><span className='pink-text'>Action-oriented:</span> You don't just dream, you DO. Initiative and a drive to see projects through are essential.</li>
          </ul>
        </div>
  
        <div className='rec-team-container'>
          <RecTeamCard name="Social" link="https://docs.google.com/forms/d/e/1FAIpQLSfPiAlEM1TYwFVs751uZCDDTAF49ro-vg1B0BNTFr1zGz533w/viewform?usp=sf_link"/>
          <RecTeamCard name="Technical" link="https://forms.gle/azn66gsf2qjvUFoP7"/>
          <RecTeamCard name="Corporate" link="https://docs.google.com/forms/d/e/1FAIpQLScyBJW6d-M-z3suHecGVDt_QeE72Y2u_Qp6BxW-yE6gCiCt5Q/viewform"/>
        </div>
      </div>

      </div>
  )
}

export default Recruitment;
