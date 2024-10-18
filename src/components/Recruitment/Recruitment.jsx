import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import './recruitment.css';
import Logo from '../../images/ecell-logo-dark.png';
import RecTeamCard from './RecTeamCard';
import BackgroundLight from '../../images/background-light.svg';


function Recruitment() {
  const winWidth = window.innerWidth;
  const navigate = useNavigate();

  const moveVariants = {
    animationOne: {
      x: [-0.1 * winWidth, 0.3 * winWidth],
      y: [-100, 200],
      transition: {
        x: {
          repeatType: "mirror",
          repeat: Infinity,
          duration: 5,
        },
        y: {
          repeatType: "mirror",
          repeat: Infinity,
          duration: 4,
        }
      }
    },
    animationTwo: {
      x: [-0.2 * winWidth, 0.1 * winWidth],
      y: [-200, 100],
      transition: {
        x: {
          repeatType: "mirror",
          repeat: Infinity,
          duration: 6,
        },
        y: {
          repeatType: "mirror",
          repeat: Infinity,
          duration: 3,
        }
      }
    }
  }


  return (
    <div className='recruitment'>
      <div className='recruitment-head'>
        <img className='logo' src={Logo} alt='ecell' />
        <button style={{width: '10vh'}} className='join-button' onClick={()=>{navigate('/')}}>Back</button>
      </div>
      <div className='recruitment-content'>
        <div className='rec-con-heading'>
          <p className='club-name'>Entrepreneurship Cell, VIT Bhopal University</p>
          <p className='recruitment-heading'>Unleash Your Entrepreneurial Spirit: </p>
          <p className='recruitment-heading'>Join E-Cell Now! </p>
          <motion.img variants={moveVariants} animate="animationOne" className="background-light bl-1" src={BackgroundLight} alt="" />
          <motion.img variants={moveVariants} animate="animationTwo" className="background-light bl-2" src={BackgroundLight} alt="" />
        </div>
        
        <div className='rec-con-body'>
          <p>
            Are you ready to turn your ideas into reality and pave the way for a brighter future? 
            Look no further because the Entrepreneurship Cell (E-Cell) of VIT Bhopal University is 
            on the lookout for passionate individuals like you to join our dynamic teams!
          </p>
          
        </div>
  
        <div style={{textAlign:"center"}}>
          <br />
          <br />
          {/* <p className='pink-text'>We are not accepting responses now.</p>
          <p>Please try again when recruitment reopens.</p> */}
        </div>

        {<div className='rec-team-container'>
          <RecTeamCard name="Social" link="https://forms.gle/W4RZViEoSv4pStpP6"/>
          <RecTeamCard name="Technical" link="https://docs.google.com/forms/d/e/1FAIpQLSc1zPMlDTmNQRw6yfqP7hnWBz8fuBlxLul8ve4QBD2CjLlTrA/viewform?usp=sf_link"/>
          <RecTeamCard name="Corporate" link="https://forms.gle/w6yUhmy6MntBdxz16"/>
          {/* <RecTeamCard name="Content" link="https://forms.gle/4CFGj6vscgbn3zLXA"/> */}
          {/* <RecTeamCard name="Operations" link="https://docs.google.com/forms/d/e/1FAIpQLSeN98oUoZx6SCqlewgM_H4xREKO0C0n4FPaap1T6-hFbGlkiw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"/> */}
          <RecTeamCard name="Events" link="https://forms.gle/VXF4Sf9N55UNBKWE8"/>
          <RecTeamCard name="Finance" link="https://docs.google.com/forms/d/e/1FAIpQLScnEJTgpI2n7r5nnaQGBKB4Qett0Rp3BVhJsnDc9-n0aqIOYA/viewform"/>
          <RecTeamCard name="Design" link="https://forms.gle/58V8vWJwqGEhyaYh7"/>
        </div>}
      </div>

      </div>
  )
}

export default Recruitment;
