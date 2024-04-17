import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function ProductDesign() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>Product Design Competition</h2>
        <br />
          <p>  
            Engage in the ultimate showcase of creativity and innovation with our Product Design Competition! 
            This exciting event challenges teams to tackle real-world problems by designing innovative 
            solutions within a limited timeframe. From ideation to presentation, participants will 
            navigate multiple rounds, including concept development, prototyping, and refinement, 
            culminating in a thrilling pitching round where they present their finalized designs to 
            judges and peers.
            <br />
            <br />

            What You'll Gain:<br />

            <span style={{color: '##F200DE'}}>Networking Opportunities:</span>
             Connect with like-minded individuals, industry experts, and potential mentors. 
             Expand your network and gain valuable contacts within the finance sector.<br />

            <span style={{color: '##F200DE'}}>Research and development opportunities:</span>
            you can research the problems near you and solve them giving you a chance to dive into 
            product development and marketing and see what real time challenges are faced by startups 
            and enterprises every day. <br />
            <br />

          </p>
            Details of the Event:<br />

            Event Date: 7 May 2024<br />

            Event Venue: Classroom(TBD)<br />

            Team Strength – 3-5 Members<br />

            Participation Fees per person: Rs. 50 /-<br />

            Award for Competition: TBD

          <div className='btn-container'>
         
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfT67LoYeLQDy81cPcSLxXvagEya0AOKFoF54j4ctmsJe0Rtw/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default ProductDesign;
