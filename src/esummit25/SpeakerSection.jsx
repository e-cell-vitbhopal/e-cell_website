import React, { useState, useEffect } from 'react';
import styles from './SpeakerSection.module.css';
import { FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import anon from '../assets/anonymous.png';
const speakers = [
  {
    id: 1,
    name: 'Revealing Soon',
    role: 'Speaker Details',
    image: anon,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Revealing Soon',
    role: 'Speaker Details',
    image: anon,
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 3,
    name: 'Revealing Soon',
    role: 'Speaker Details',
    image: anon,
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 4,
    name: 'Revealing Soon',
    role: 'Speaker Details',
    image:anon,
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 5,
    name: 'Revealing Soon',
    role: 'Speaker Details',
    image: anon,
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 6,
    name: 'Revealing Soon',
    role: 'Speaker Details',
    image: anon,
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