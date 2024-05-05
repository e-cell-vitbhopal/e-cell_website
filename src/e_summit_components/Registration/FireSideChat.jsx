import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function FireSideChat() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>Speaker session: Dr. Vijender Singh Chauhan</h2>
        <br />
          <p> 
            E - Cell of VIT Bhopal is back with yet another exiciting event. <br />
            Speaker session, it's a dynamic exchange with a renowned where you'll have the chance to ask questions, 
            share your thoughts, and connect with fellow enthusiasts.Plus, we'll be having a podcast session, ensuring 
            that the excitement continues long after the event ends.<br />
  
            Join us for an inspiring Speaker Session featuring successful speaker sharing their journey, insights, and advice. Engage in candid conversations, participate in a Q&A, and network with industry professionals.
            <br /><br />
            Key Takeaways: <br />
            - Hear personal stories and lessons from successful entrepreneurs. <br />
            - Gain practical advice and strategies for entrepreneurship. <br />
            - Network with fellow entrepreneurs and industry experts. <br />

            Don't miss this opportunity to ignite your entrepreneurial spirit!<br /><br />

            Date : 8 May, 9.30am to 1.00 pm <br />
            Venue - Auditorium, VIT Bhopal University<br />
          </p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/86Q6f9CdaTpMt2XB7' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default FireSideChat;
