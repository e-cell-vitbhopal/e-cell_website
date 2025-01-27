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
    <div className='ecell-recruitment-container'>
      <div className='ecell-recruitment-header'>
        <img className='ecell-recruitment-logo' src={Logo} alt='ecell' />
        <button 
          style={{width: '10vh'}} 
          className='ecell-recruitment-back-btn' 
          onClick={() => {navigate('/')}}
        >
          Back
        </button>
      </div>
      <div className='ecell-recruitment-main'>
        <div className='ecell-recruitment-hero'>
          <p className='ecell-recruitment-club-title'>Entrepreneurship Cell, VIT Bhopal University</p>
          <p className='ecell-recruitment-main-heading'>Unleash Your Entrepreneurial Spirit: </p>
          <p className='ecell-recruitment-main-heading'>Join E-Cell Now! </p>
          <motion.img 
            variants={moveVariants} 
            animate="animationOne" 
            className="ecell-recruitment-bg-light ecell-recruitment-bg-light-1" 
            src={BackgroundLight} 
            alt="" 
          />
          <motion.img 
            variants={moveVariants} 
            animate="animationTwo" 
            className="ecell-recruitment-bg-light ecell-recruitment-bg-light-2" 
            src={BackgroundLight} 
            alt="" 
          />
        </div>
        <div className='ecell-recruitment-description'>
          <p>
            Are you ready to turn your ideas into reality and pave the way for a brighter future?
            Look no further because the Entrepreneurship Cell (E-Cell) of VIT Bhopal University is
            on the lookout for passionate individuals like you to join our dynamic teams!
          </p>
        </div>
        <div style={{textAlign:"center"}}>
          <br />
          <br />
          {/* <p className='ecell-recruitment-notice'>We are not accepting responses now.</p>
          <p>Please try again when recruitment reopens.</p> */}
        </div>
        <div className='ecell-recruitment-teams-grid'>
          <RecTeamCard name="Social Media" link="https://forms.gle/W4RZViEoSv4pStpP6"/>
          <RecTeamCard name="Technical" link="https://docs.google.com/forms/d/e/1FAIpQLSc1zPMlDTmNQRw6yfqP7hnWBz8fuBlxLul8ve4QBD2CjLlTrA/viewform?usp=sf_link"/>
          <RecTeamCard name="Corporate" link="https://forms.gle/w6yUhmy6MntBdxz16"/>
          <RecTeamCard name="Content" link="https://forms.gle/DRAiBfQdrgzqJhxWA"/>
          <RecTeamCard name="Operations" link="https://forms.gle/A67pAd8AMTUztqXP8"/>
          <RecTeamCard name="Events" link="https://forms.gle/VXF4Sf9N55UNBKWE8"/>
          <RecTeamCard name="Finance & Sponsorship" link="https://docs.google.com/forms/d/e/1FAIpQLScnEJTgpI2n7r5nnaQGBKB4Qett0Rp3BVhJsnDc9-n0aqIOYA/viewform"/>
          <RecTeamCard name="Design" link="https://forms.gle/58V8vWJwqGEhyaYh7"/>
          <RecTeamCard name="Podcast" link="https://forms.gle/XgzJKLe7CS8u1xrk6"/>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;