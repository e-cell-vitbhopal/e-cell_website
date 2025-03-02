import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('startup-expo-about--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="startup-expo-about" ref={sectionRef} id="about">
      <div className="startup-expo-about__container">
        <h2 className="startup-expo-about__title">About Us</h2>
        <div className="startup-expo-about__content">
          <div className="startup-expo-about__text">
            <p>
            The Startup Expo, organized by the Entrepreneurship Cell of VIT Bhopal, is a dynamic platform designed to bring together startups, entrepreneurs, investors, industry experts, and students. This event offers startups the opportunity to showcase their innovations, pitch to investors, gain real-time customer feedback, and connect with key stakeholders. With engaging panel discussions, interactive workshops, startup booths, and entrepreneurial challenges, the Startup Expo fosters collaboration, creativity, and business growth, making it a cornerstone event of the E-Summit.
            </p>
            {/* <p>
              Our mission is to provide a platform for innovative ideas to flourish and transform into 
              successful businesses that shape tomorrow's world.
            </p> */}
          </div>
         
           
          </div>
        </div>
    
    </section>
  );
};

export default About;