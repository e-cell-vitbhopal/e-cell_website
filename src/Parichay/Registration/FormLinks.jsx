import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/ecell-logo-dark.png';
import './registration.css';

function FormLinks() {
  const navigate=useNavigate()
  const registrationOpen = true;

  return (
    registrationOpen?
    <div className='esummit-registration'>
       <div className='esummit-registration'>
          <img className='logo' src={Logo} alt='e-cell vit bhopal' />
          <div className='form-container'>
            <h2 className='heading'>Events</h2>
          
            <div className='events'>

            {/* Day 1 Events */}
              <div className='events-container'>
                <div className="events-section">
                  

{/*                   <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/InternshipFair')}}>
                    <span>Internship/Job Fair</span>
                  </div> */}

                  

                  {/* <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/SilentDisco')}}>
                    <span>Silent Disco</span>
                  </div> */}
                </div>
              </div>

              {/* Day 2 Events */}
              <div className='events-container'>
                <div className="events-section">
                  <h3>11 October</h3>

                  <div className="event" onClick={()=>{navigate('/e_summit_2024/registration/FireSideChat')}}>
                    <span>Parichay 2024</span>
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
    :
    <div className='events-container'>
      <h2 className='heading' style={{width: '100vw'}}>Registrations will resume Shortly.</h2>
    </div>
  );
}

export default FormLinks;
