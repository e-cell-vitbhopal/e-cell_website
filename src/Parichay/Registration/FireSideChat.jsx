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
            <h2 className='heading'>Parichay</h2>

            
      <div className='registration-form'>
        <h2>About Parichay</h2>
        <br />
          <p> 
            E - Cell of VIT Bhopal is back with yet another exiciting event. <br />
            Speaker session, it's a dynamic exchange with a renowned where you'll have the chance to ask questions, 
            share your thoughts, and connect with fellow enthusiasts.Plus, we'll be having a podcast session, ensuring 
            that the excitement continues long after the event ends.<br />
  
            Join us for an inspiring Speaker Session featuring successful speaker sharing their journey, insights, and advice. Engage in candid conversations, participate in a Q&A, and network with industry professionals.
            <br /><br />
            At Parichay, you’ll get to: <br />
            - Learn about E-Cell: We’ll take you through what our Entrepreneurship Cell is all about, the activities we organize, and how we support aspiring entrepreneurs on their journey. <br />
            - Hearfrom Industry Leaders: Get inspired by a guest speaker from the industry who will share valuable insights on the entrepreneurial ecosystem, real-world challenges, and success stories.<br />
            - Experience Interactive Activities: Participate in engaging sessions like dance, fun games like Pictionary Buzzer, and innovative pitching exercises that will challenge your creativity and teamwork. <br />
            - Pitch Your Ideas: As part of our 'Eureka' pitching event, you’ll get a chance to pitch your unique business ideas and receive valuable feedback, along with the possibility of progressing to higher rounds.. <br />

            Whether you’re an aspiring entrepreneur or just curious about how the world of startups works, Parichay is your entry point into this exciting ecosystem. Join us and be part of a transformative journey at VIT Bhopal!<br /><br />

            Date : 11 October, 9.30am to 3.00 pm <br />
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
