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
        <h2>Speaker Session</h2>
        <br />
          <p>Get ready to experience a thrilling speaker session , E-Cell VIT Bhopal is 
            excited to present an upcoming speaker session that will delve into the intricacies of 
            entrepreneurship, research and effective marketing strategies. This event offers a unique 
            learning opportunity and networking platform tailored for students passionate about 
            problem-solving, solution-building, and entrepreneurship exploration.
          </p>

          <p>Date: 7th May 2024,9:30am onwards</p>
          <p>Venue: Auditorium</p>
          <p>Registration fee : 150 INR / person</p>
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
