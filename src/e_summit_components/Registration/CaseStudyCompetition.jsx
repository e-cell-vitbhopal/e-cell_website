import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function CaseStudyCompetition() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>Case Study Competition</h2>
        <br />
          <p> 
          Join us for an exhilarating intellectual showdown at the Case Study Competition, hosted by E-cell of VIT Bhopal. <br />
          Prepare to delve into the depths of complex scenarios, dissecting challenges, and crafting innovative solutions alongside your team.<br /><br />

          This event is an opportunity to showcase your analytical prowess, strategic thinking, and collaborative skills. 
          Whether you're a seasoned problem-solver or a budding strategist, this competition promises to push your limits 
          and ignite your creativity.<br />
          <br />
        
          Details of the Event:<br />

          Event Date: 8 May 2024<br />

          Event Venue: TBD<br />

          Team Strength – 4 Members<br />

          Participation Fees: Rs. 200 /-<br />

        Don't miss out on this chance to test your mettle, collaborate with peers, and showcase your problem-solving prowess. Register today and embark on a journey of strategic exploration and innovation!<br />

          </p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/xek5TGu3otHNHDbc8' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default CaseStudyCompetition;
