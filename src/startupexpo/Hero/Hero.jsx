import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    title.classList.add('startup-expo-hero__title--animate');
    
    return () => {
      title.classList.remove('startup-expo-hero__title--animate');
    };
  }, []);

  return (
    <section className="startup-expo-hero" id="home">
      <div className="startup-expo-hero__container">
        <h1 ref={titleRef} className="startup-expo-hero__title">Startup Expo </h1>
        <p className="startup-expo-hero__subtitle">LUCID VENTURES</p>
        <a href="#register" className="startup-expo-hero__button">
  Register Now
</a>

      </div>
    </section>
  );
};

export default Hero;