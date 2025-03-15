import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import './Button.css';
const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      const scrollY = window.scrollY;
      const newOpacity = 1 - (scrollY / (window.innerHeight * 0.8));
      
      // Clamp opacity between 0 and 1
      setOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Show text after a slight delay for animation effect
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div 
        className={styles.fixedBackground} 
        style={{ opacity: opacity }}
      ></div>
      <div className={`${styles.contentContainer} ${isTextVisible ? styles.visible : styles.hidden}`}>
        <h1 className={styles.heading}>
          <span className={styles.headingMain}>Transforming Dreams into Reality</span>
          <span 
  className={styles.headingAccent} 
  data-text="One Start-Up at a Time!"
>
  One Start-Up at a Time!
</span>
        </h1>
        <p className={styles.description}>
          Welcome to the Entrepreneurial Cell of VIT Bhopal, a dynamic hub dedicated to nurturing and empowering the next generation of entrepreneurs across India. The future of your idea begins here, at the Entrepreneurial Cell of VIT Bhopal - where we don't just promote entrepreneurs, we build success stories.
        </p>
        <div className={styles.ctaContainer}>
          <a href="#" className='btn'>Join Us!</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;