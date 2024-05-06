import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';

function IPLAuction() {
  const navigate=useNavigate()

  return (

    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>

            
      <div className='registration-form'>
        <h2>IPL Auction</h2>
        <p>
          Step into the shoes of team owners and experience the thrill of the IPL player auctions in this fun and engaging activity! 
          Inspired by the real IPL auctions, college students will have the opportunity to build their dream cricket teams by 
          bidding on players with virtual currency.<br />
          <br />

          Date & Time: May 7, 2024, From 9.00 am to 6.00 pm<br />

          Venue: Auditorium<br />

          Team Size: Form teams of 3-5 members and strategize together to create the ultimate lineup.<br />
          Virtual Budget: Each team will be provided with a fixed amount of virtual currency to spend on player auctions.<br />
          Player Pool: Dive into a pool of cricket players, each with their own base prices and point values based on their batting, bowling, or all-rounder skills.<br />
          Winning Criteria: Accumulate points through your selected players' performance and clever bidding strategy. The team with the 
          highest points, considering both player performance and remaining virtual currency, will emerge victorious.<br />
          <br />
          Registration:
          
          Fees: ₹700 per team (3-5 members).

          <br />

          Competition Awards:<br />
          1st Prize: Rs. 5000/-<br />
          2nd Prize: Rs. 3000/-<br />
          3rd Prize: Rs. 2000/-<br />


          Don't miss out on this exciting opportunity to experience the thrill of IPL player auctions firsthand! Register your team now and get ready for an action-packed event. <br />
        </p>
          <div className='btn-container'>
         
            <a href='https://forms.gle/zAXg3mMncva7i4uG6' target='_blank' rel='noopener noreferrer'><button>Register</button></a>

            <a><button onClick={(e)=>{navigate('/e_summit_2024/registration')}}>Return</button></a>
          </div>
        </div>
          
        </div>
      </div>  
    </div>

  );
}

export default IPLAuction;
