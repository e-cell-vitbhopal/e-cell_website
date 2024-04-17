import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function SilentDisco() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>Silent Disco</h2>
        <p>
        🎧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐒𝐢𝐥𝐞𝐧𝐭 𝐃𝐢𝐬𝐜𝐨 𝐄𝐱𝐭𝐫𝐚𝐯𝐚𝐠𝐚𝐧𝐳𝐚! 🎶 <br />

        Join us for an unforgettable day of rhythm and beats! The 𝐄-𝐂𝐞𝐥𝐥 𝐂𝐥𝐮𝐛 proudly presents a one-of-a-kind Silent Disco event for all VIT Bhopal students.<br />
        Get ready to groove and vibe together in unison! This isn't just any dance party; it's a collective celebration of music, friendship, and fun.<br /><br />
        But wait, there's more! Dive into extra fun with <strong>𝙛𝙖𝙘𝙚 𝙥𝙖𝙞𝙣𝙩𝙞𝙣𝙜</strong> and strike a pose at our <strong>𝙥𝙝𝙤𝙩𝙤 𝙗𝙤𝙤𝙩𝙝</strong> to capture memories that will last a lifetime.<br />

        <br />

𝐃𝐚𝐭𝐞:  7 May 2024<br />

𝐓𝐢𝐦𝐞: The event is occurring in two slots: <br />

            1) 04:00 pm - 05:00 pm<br />

            2) 05:00 pm - 06:00 pm<br />

            You can choose your desired slot.<br />

𝐕𝐞𝐧𝐮𝐞: TBD<br />                                                                                                                                                                                                                              

Register now to secure your spot and be part of the ultimate dance experience. Don't miss out on the fun – reserve your headphones and let the music move you!<br />

Let's dance our way into an unforgettable night together! 💃🕺


</p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/ZrggmiryZJdRBs9i6' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default SilentDisco;
