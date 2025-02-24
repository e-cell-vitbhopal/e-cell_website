import React, { useState, useEffect } from 'react';
import styles from './SpeakerSection.module.css';
import { FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const speakers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, InnovateLabs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CTO, FutureScale',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Partner, VentureX',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 5,
    name: 'Lisa Patel',
    role: 'Founder, AI Solutions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Director, StartupHub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
];

const SpeakerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        handleSlideChange('next');
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleSlideChange = (newDirection) => {
    setIsTransitioning(true);
    setDirection(newDirection);

    if (newDirection === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  if (isMobile) {
    const speaker = speakers[currentIndex];
    return (
      <section className={styles.speakerSection}>
        <h2 className={styles.title}>Speakers</h2>
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`} 
            onClick={() => handleSlideChange('prev')}
          >
            <FaChevronLeft />
          </button>
          <div className={`${styles.speakerCard} ${styles[direction]} ${isTransitioning ? styles.transitioning : ''}`}>
            <div className={styles.imageContainer}>
              <img src={speaker.image} alt={speaker.name} className={styles.speakerImage} />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <p className={styles.speakerRole}>{speaker.role}</p>
                  <div className={styles.socialLinks}>
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className={styles.speakerName}>{speaker.name}</h3>
          </div>
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`} 
            onClick={() => handleSlideChange('next')}
          >
            <FaChevronRight />
          </button>
          <div className={styles.indicators}>
            {speakers.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                onClick={() => {
                  const newDirection = index > currentIndex ? 'next' : 'prev';
                  setDirection(newDirection);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.speakerSection}>
      <h2 className={styles.title}>Speakers</h2>
      <div className={styles.speakerGrid}>
        {speakers.map((speaker) => (
          <div key={speaker.id} className={styles.speakerCard}>
            <div className={styles.imageContainer}>
              <img src={speaker.image} alt={speaker.name} className={styles.speakerImage} />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <p className={styles.speakerRole}>{speaker.role}</p>
                  <div className={styles.socialLinks}>
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <FaLinkedin />
                    </a>
                    <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className={styles.speakerName}>{speaker.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakerSection;