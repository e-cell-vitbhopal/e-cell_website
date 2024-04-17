import React, { useEffect, useState, } from 'react';
import './PopUp.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png'


const Popup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <button className="close-button" onClick={onClose}> ❌ </button>
      <Link to="https://www.ecellvitbhopal.in/e_summit_2024"> 
        <img src={Logo} alt="Popup" />
      </Link>
     
      </div>
    </div>
  );
};

export default Popup;