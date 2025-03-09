import React, { useState, useEffect, useRef } from 'react';
import './Passes.css';

const Passes = () => {
  const [hoveredPass, setHoveredPass] = useState(null);
  const cardsRef = useRef([]);
  
  const platinumPerks = [
    
    'Promotional Banner & Poster Placement at the Venue',
    'LED Screen',
    'Location Preference'
  ];
  
  const passes = [
    {
      id: 1,
      name: 'Silver Pass',
      features: [
        '10ft x 10ft stall',
        '2 chairs, 1 table and dustbin',
        'Light and power socket',
        'Mention in Expo Pamphlet',
        'Fasica(Name of Startup)',
        'Networking Lunch with VCs and founders',
        'Free E-Summit passes (upto 2)',
      ],
      color: '#6a11cb'
    },
    {
      id: 2,
      name: 'Gold Pass',
      features: [
        '10ft x 10ft stall',
        '2 chairs, 1 table and dustbin',
        'Light and power socket',
        'Mention in Expo Pamphlet',
        'Fasica(Name of Startup)',
        'Networking Lunch with VCs and founders',
        'Free E-Summit passes (upto 3)',
        '30 seconds Product video played on the main screens',
      ],
      color: '#2575fc',
      featured: true
    },
    {
      id: 3,
      name: 'Platinum Pass',
      features: [
        '10ft x 10ft stall',
        '2 chairs, 1 table and dustbin',
        'Light and power socket',
        'Mention in Expo Pamphlet',
        'Fasica(Name of Startup)',
        'Networking Lunch with VCs and founders',
        'Free E-Summit passes (upto 4)',
        '60 seconds Product video played on the main screens',
        'Promotional Banner & Poster Placement at the Venue',
        'LED Screen',
        'Location Preference'
      ],
      color: '#8e44ad'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            const features = entry.target.querySelectorAll('.passes__feature');
            features.forEach((feature, index) => {
              feature.style.setProperty('--index', index);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const cards = document.querySelectorAll('.passes__card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="passes" id="passes">
      <div className="passes__container">
        <h2 className="passes__title">Stall Tiers</h2>
        <div className="passes__grid">
          {passes.map((pass, index) => (
            <div 
              className={`passes__card ${pass.featured ? 'passes__card--featured' : ''}`}
              key={pass.id}
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => setHoveredPass(pass.id)}
              onMouseLeave={() => setHoveredPass(null)}
              style={{
                borderColor: pass.color,
                transform: hoveredPass === pass.id ? 'translateY(-10px)' : null
              }}
            >
              {pass.featured }
              <h3 className="passes__card-title" style={{ color: pass.color }}>{pass.name}</h3>
              <ul className="passes__features">
                {pass.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="passes__feature">
                    <span className="passes__feature-icon" style={{ color: pass.color }}>✓</span>
                    {feature}
                  </li>
                ))}
                {platinumPerks.map((perk, perkIndex) => (
                  !pass.features.includes(perk) && (
                    <li key={`extra-${perkIndex}`} className="passes__feature">
                      <span className="passes__feature-icon" style={{ color: 'red' }}>✗</span>
                      {perk}
                    </li>
                  )
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passes;