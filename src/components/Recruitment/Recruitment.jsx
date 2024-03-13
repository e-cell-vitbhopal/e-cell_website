import React from 'react';
import { motion } from 'framer-motion';

import './recruitment.css';
import Logo from '../../images/ecell-logo-dark.png';
import RecTeamCard from './RecTeamCard';
import BackgroundLight from '../../images/background-light.svg';


function Recruitment() {
  const winWidth = window.innerWidth;

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
        <button style={{width: '10vh'}} className='join-button'>Back</button>
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
          <p>You'll have the opportunity to:</p>
          <ul>
            <li><span className='pink-text'>Collaborate </span>with like-minded peers</li>
            <li>Gain <span className='pink-text'>hands-on experience</span> in entrepreneurship</li>
            <li><span className='pink-text'>Recognition </span> for your contributions to the entrepreneurial ecosystem</li>
            <li>A <span className='pink-text'>supportive community</span> that encourages growth and innovation</li>
          </ul>
        </div>
  
        <div className='rec-team-container'>
          <RecTeamCard name="Social" link="https://docs.google.com/forms/d/e/1FAIpQLSfPiAlEM1TYwFVs751uZCDDTAF49ro-vg1B0BNTFr1zGz533w/viewform?usp=sf_link"/>
          <RecTeamCard name="Technical" link="https://forms.gle/azn66gsf2qjvUFoP7"/>
          <RecTeamCard name="Corporate" link="https://docs.google.com/forms/d/e/1FAIpQLScyBJW6d-M-z3suHecGVDt_QeE72Y2u_Qp6BxW-yE6gCiCt5Q/viewform"/>
          <RecTeamCard name="Content" link="https://forms.gle/4CFGj6vscgbn3zLXA"/>
          <RecTeamCard name="Operations" link="https://docs.google.com/forms/d/e/1FAIpQLSeN98oUoZx6SCqlewgM_H4xREKO0C0n4FPaap1T6-hFbGlkiw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"/>
          <RecTeamCard name="Events" link="https://forms.gle/rSFBhFvta7eGpw558"/>
          <RecTeamCard name="Finance" link="https://forms.gle/rymjRtLVV27qxm8R9"/>
          <RecTeamCard name="Design" link="https://forms.gle/TTaqoJooCd5zU9kZA"/>
        </div>
      </div>

      </div>
  )
}

export default Recruitment;
