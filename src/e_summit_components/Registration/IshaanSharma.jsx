import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function IshaanSharma() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>Networking arena</h2>
        <br />
          <p>Get ready to experience a thrilling NETWORKING session, E-Cell VIT Bhopal is excited to present an upcoming session that will delve into the intricacies of entrepreneurship, research and effective marketing strategies. From panel discussion to dynamic networking opportunities, this event is your gateway to unlocking the potential of your start-up dreams. Don't miss out on this chance to connect, learn, and thrive in the vibrant landscape of entrepreneurship. See you there!"</p>

          <p>Date: 8th May 2024, 12.30PM onwards</p>
          <p>Venue: Auditorium</p>
          <p>Registration fee : 99 INR / person</p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/dJWG1YeVdi6yXq5R6' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default IshaanSharma;
