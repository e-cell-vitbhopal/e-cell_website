import React from 'react';
import './PassSection.css';

function PassSection() {
  return (
    <div className="pass-section">
      <h1 className="passes-main-title">PASSES</h1>
      <div className="pass-container">
        <h2 className="pass-title">All In One Pass</h2>
        <div className="pass-content">
          <div className="pass-price">
            <span className="currency">₹</span>
            <span className="amount">275</span>
            {/* <span className="period">/month</span> */}
          </div>
          <ul className="pass-features">
            <li>Access to all Speaker Events</li>
            <li>Access to all Competitions</li>
            <li>Access to Food Carnival</li>
            <li>Access to Book Fair</li>
          </ul>
          <button 
  className="pass-button" 
  onClick={() => window.open("https://forms.gle/fNFuTTqLoYYU1zgF6", "_blank")}
>
  Register Now
</button>

        </div>
      </div>
    </div>
  );
}

export default PassSection;