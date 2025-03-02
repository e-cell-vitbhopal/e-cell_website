import React from 'react';
import './Criteria.css';

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.criteria__item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  items.forEach(item => {
    observer.observe(item);
  });
});

const Criteria = () => {
  return (
    <section className="criteria">
      <div className="criteria__container">
        <h2 className="criteria__title">Screening Process</h2>
        <div className="criteria__content">
          <div className="criteria__intro">
          </div>
          <div className="criteria__list">
            <div className="criteria__item">
              <div className="criteria__item-header">
                <div className="criteria__item-icon">💼</div>
                <h3 className="criteria__item-title">Pitch Deck Submission</h3>
              </div>
              <p className="criteria__item-description">
              Startups must submit a comprehensive pitch deck detailing their business model, market potential, and growth strategy.
              </p>
            </div>
            
            <div className="criteria__item">
              <div className="criteria__item-header">
                <div className="criteria__item-icon">🔍</div>
                <h3 className="criteria__item-title">Screening & Evaluation</h3>
              </div>
              <p className="criteria__item-description">
              The submitted pitch decks will be rigorously assessed by E-Cell VIT Bhopal members based on viability, innovation, and scalability.
              </p>
            </div>
            <div className="criteria__item">
              <div className="criteria__item-header">
                <div className="criteria__item-icon">🔮</div>
                <h3 className="criteria__item-title">Follow-Up Interviews</h3>
              </div>
              <p className="criteria__item-description">
              Shortlisted startups may be invited for a one-on-one discussion with the evaluation panel to further assess their readiness and potential.
              </p>
            </div>
            
            <div className="criteria__item">
              <div className="criteria__item-header">
                <div className="criteria__item-icon">👥</div>
                <h3 className="criteria__item-title">Selection & Confirmation</h3>
              </div>
              <p className="criteria__item-description">
              Shortlisted startups will receive confirmation emails, granting them the opportunity to set up stalls at the expo.
              </p>
            </div>
            
            <div className="criteria__item">
              <div className="criteria__item-header">
                <div className="criteria__item-icon">📊</div>
                <h3 className="criteria__item-title">Pre-Event Briefing</h3>
              </div>
              <p className="criteria__item-description">
              A virtual orientation session will be conducted to guide selected startups on stall setup, event guidelines, and key logistics.
              </p>
            </div>
            
            <div className="criteria__item">
              <div className="criteria__item-header">
                <div className="criteria__item-icon">🎯</div>
                <h3 className="criteria__item-title"> Investor Pitch Slot Allocation</h3>
              </div>
              <p className="criteria__item-description">
              Each selected startup will be assigned a dedicated time slot to present their pitch to potential investors during the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
