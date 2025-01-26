import React from 'react'
import "../../styles/dashboard-styles/dashboard.css"
import { TransformText } from './TransformText'
import WelcomeText from './WelcomeText'
import Lottie from 'lottie-react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

import animationData from "../../assets/rocket-animation.json"
import { AnimatedBackground } from 'animated-backgrounds';

const Dashboard = () => {
    return (


        <div className='main-dashboard'>
            <AnimatedBackground animationName="starryNight" style={{
                opacity: 1,

            }} />
            <div className='grid'>

                {/* TRANFORM TEXT */}
                <div className="grid-item" id='tranform-text'>
                    <TransformText />
                </div>

                {/* WELCOME TEXT */}

                <div className="grid-item" id='welcome-text'>
                    <div id='club-name'><h3 style={{ color: "skyBlue" }}>E-Cell</h3></div>
                    <WelcomeText />
                </div>

                <div className="grid-item" id='logo-animation'>
                    <Lottie animationData={animationData} />
                </div>

                <div className="grid-item" id='media-icons'>
                    {/* <p>Follow us</p> */}
                    <div className="social-links">
                        <div className="social-media-item">
                            <a
                                href="https://www.instagram.com/ecell_vit.bhopal/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={30} color="#E1306C" />
                            </a>
                        </div>
                        <div className="social-media-item">
                            <a
                                href="https://twitter.com/ecell_vitb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter size={30} color="#1DA1F2" />
                            </a>
                        </div>
                        <div className="social-media-item">
                            <a
                                href="https://www.linkedin.com/company/e-cell-vit-bhopal/mycompany/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn
                                    className="media-icon"
                                    size={40}
                                    color="#0077B5"
                                />
                            </a>
                        </div>
                    </div>

                </div>
                {/* JOIN US BUTTON */}
                <div className="grid-item" id='join-btn'>
                    <button className='join-btn'>
                        <div>JOIN US</div>
                    </button>
                </div>


                {/* ENTREPRENEURSHIP */}
                <div className="grid-item" id='startup-text'>
                    {/* <h1 className='entrepreneurship-text'>ENTREPRENEURSHIP</h1> */}
                    <h1>
                        One Start-Up at a Time!
                    </h1>
                </div>

            </div>

        </div >

    )
}

export default Dashboard