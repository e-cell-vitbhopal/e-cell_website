import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function InternshipFair() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>Internship / Job Fair</h2>
        <br />
          <p> 
          Are you ready to launch your career journey?<br /> 
          E-Cell invites all aspiring innovators to the Internship and Job Extravaganza on 7th May!<br />
          <br />

          About the Event: <br />
          Join us for a one  of  a  kind opportunity to explore internship and job opportunities with leading companies across diverse 
          fields, including Technology & Software Development, Marketing & Business Development, Product Management & Design, 
          Finance & Operations, and more!<br />
          <br />

          What to Expect: <br />
            Networking Opportunities:  Connect with representatives from renowned companies seeking passionate and talented interns.<br />
            Valuable Insights:  Gain insights into the latest industry trends and acquire practical skills to propel your entrepreneurial journey.<br />
            Land Your Dream Internship:  Showcase your skills and potential to recruiters and secure an internship aligned with your interests and aspirations.<br />
          <br />

          Event Details: <br />
            Date:  7th May 2024
            Venue: TBD
            Participation Fee:  Rs 50/- per person

            <br />
          Register now to embark on your career journey with E -Cell! <br />
          </p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/qgtvtWyrqK6eT6tL7' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default InternshipFair;
