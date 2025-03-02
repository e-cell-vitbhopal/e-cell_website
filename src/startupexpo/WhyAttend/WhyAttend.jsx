import React, { useEffect, useRef } from 'react';
import './WhyAttend.css';

const WhyAttend = () => {
  const itemsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('startup-expo-why-attend__item--visible');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  // Add to refs array
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section className="startup-expo-why-attend" id="why-attend">
      <div className="startup-expo-why-attend__container">
        <h2 className="startup-expo-why-attend__title">Why Attend</h2>
        <div className="startup-expo-why-attend__grid">
          <div className="startup-expo-why-attend__item" ref={addToRefs}>
            <div className="startup-expo-why-attend__icon">🚀</div>
            <h3 className="startup-expo-why-attend__item-title">Investment Opportunities</h3>
            <p className="startup-expo-why-attend__item-text">
            Investment Opportunities up to ₹10-15 Lakh – Pitch your startup to potential investors and secure funding to fuel your entrepreneurial journey.
            </p>
          </div>
          <div className="startup-expo-why-attend__item" ref={addToRefs}>
            <div className="startup-expo-why-attend__icon">💡</div>
            <h3 className="startup-expo-why-attend__item-title">Government Support</h3>
            <p className="startup-expo-why-attend__item-text">
            Get expert guidance on government schemes, startup registration, and compliance to streamline your business.
            </p>
          </div>
          <div className="startup-expo-why-attend__item" ref={addToRefs}>
            <div className="startup-expo-why-attend__icon">💰</div>
            <h3 className="startup-expo-why-attend__item-title">Massive Product Showcase Footfall</h3>
            <p className="startup-expo-why-attend__item-text">
            Present your product to a diverse audience of 12,000+ attendees, including investors, industry leaders, and Gen Z consumers.  
            </p>
          </div>
          <div className="startup-expo-why-attend__item" ref={addToRefs}>
            <div className="startup-expo-why-attend__icon">🎓</div>
            <h3 className="startup-expo-why-attend__item-title">Mentorship & Expert Guidance </h3>
            <p className="startup-expo-why-attend__item-text">
            Gain valuable insights and feedback from seasoned mentors to accelerate your startup’s growth. 
            </p>
          </div>
          <div className="startup-expo-why-attend__item" ref={addToRefs}>
            <div className="startup-expo-why-attend__icon">🏆</div>
            <h3 className="startup-expo-why-attend__item-title">Networking & Pitching Sessions</h3>
            <p className="startup-expo-why-attend__item-text">
            Connect with top investors, entrepreneurs, and industry professionals while pitching your ideas to decision-makers.
            </p>
          </div>
          <div className="startup-expo-why-attend__item" ref={addToRefs}>
            <div className="startup-expo-why-attend__icon">🌐</div>
            <h3 className="startup-expo-why-attend__item-title">Inspirational Speaker Sessions & Engaging Mini-Events</h3>
            <p className="startup-expo-why-attend__item-text">
            Learn from renowned speakers and participate in workshops, interactive sessions, and exciting challenges.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;