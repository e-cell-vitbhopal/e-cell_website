import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function PaperTrading() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>PaperTrading</h2>
        <br />
          <p> 
          Welcome to the Paper Trading Competition, where you can test your investment skills in a risk-free environment and compete for exciting prizes!<br />
          <br />
          Event Overview:<br />
          Our paper trading competition is designed to provide participants with a simulated trading experience where they can hone their 
          investment skills in a risk-free environment. Throughout the competition, participants will have the opportunity to build 
          and manage their virtual investment portfolios, gaining practical insights into financial markets and investment strategies.<br />
          <br />
          What You'll Gain:<br />
          Hands-on Experience: Experience the thrill of trading in a simulated environment, allowing you to practice investment strategies and techniques without risking real capital.<br />
          Enhanced Skills: Sharpen your analytical and decision-making skills as you navigate through market fluctuations and make investment decisions.<br />
          Feedback and Learning: Receive feedback on your trading performance and learn from experienced traders and mentors, helping you improve your investment approach.<br />
          <br />
          Event Details:<br />
          Date: 8th May 2024<br />
          Venue: Classroom (TBD)<br />
          <br />
          Participation Fee: <br />
            Solo- Rs. 75/- per person <br />
            Duo- Rs. 150/- per team <br />
          
            <br />
          Competition Awards:<br />
          1st Prize: Rs. 500/-<br />
          2nd Prize: Rs. 300/-<br />
          3rd Prize: Rs. 200/-<br />
          </p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/qhcuzZh9Si5F4gbZA' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default PaperTrading;
