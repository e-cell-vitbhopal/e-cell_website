import React, { useEffect, useState, useRef } from 'react';
import './Counter.css';
import city from '../../assets/cityscape.png';
import startup from '../../assets/success.png';
import students from '../../assets/People1.png';

const Counter = () => {
  const stats = [
    { title: "Cities", count: 4, image: city },
    { title: "Startups", count: 20, image: startup },
    { title: "Students", count: 4000, image: students }
  ];

  return (
    <div className="counter-section">
      <h2 className="counter-title">Our Impact</h2>
      <div className="counter-grid">
        {stats.map((stat, index) => (
          <CounterCard key={index} title={stat.title} count={stat.count} image={stat.image} />
        ))}
      </div>
    </div>
  );
};

const CounterCard = ({ title, count, image }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) startCounting();
  }, [isVisible]);

  const startCounting = () => {
    let start = 0;
    const increment = count / 50;
    const duration = 2000;
    const interval = duration / 50;

    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setCurrentCount(count);
        clearInterval(timer);
      } else {
        setCurrentCount(Math.floor(start));
      }
    }, interval);
  };

  const handleRestart = () => {
    startCounting();
  };

  return (
    <div
      className="counter-card"
      ref={cardRef}
      onMouseEnter={() => window.innerWidth > 768 && handleRestart()}
      onClick={() => window.innerWidth <= 768 && handleRestart()}
    >
      <div className="counter-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="counter-card-title">{title}</h3>
      <div className="counter-value">{currentCount}+</div>
    </div>
  );
};

export default Counter;
