import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';
import './registration.css';

function FormLinks() {
  const navigate=useNavigate()

  return (
    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>
          
            <div className='events'>

            {/* Day 1 Events */}
              <div className='events-container'>
                <div className="events-section">
                  <h3>7th May</h3>
                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/IshaanSharma')}}>
                    <span>Speaker Session: Ishaan Sharma</span>
                  </div>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/ProductDesign')}}>
                    <span>Product Design Competition</span>
                  </div>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/InternshipFair')}}>
                    <span>Internship/Job Fair</span>
                  </div>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/IPLAuction')}}>
                    <span>IPL Auction</span>
                  </div>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/SilentDisco')}}>
                    <span>Silent Disco</span>
                  </div>
                </div>
              </div>

              {/* Day 2 Events */}
              <div className='events-container'>
                <div className="events-section">
                  <h3>8th May</h3>
                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/FireSideChat')}}>
                    <span>Fire Side Chat</span>
                  </div>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/CaseStudyCompetition')}}>
                    <span>Case Study Competition</span>
                  </div>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/PaperTrading')}}>
                    <span>Paper Trading</span>
                  </div>

                </div>
                
              </div>
              <div className='btn-container'>
                <a><button onClick={(e)=>{navigate('/e_summit_2024')}}>Return</button></a>
              </div>
              

            </div>
          </div>
      </div>  
    </div>
  );
}

export default FormLinks;
