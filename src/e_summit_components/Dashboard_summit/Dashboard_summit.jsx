import React from "react";
import "./dashboard_summit.css";
import Esummit from "../../images/Esummit.png";
import { useNavigate } from 'react-router-dom';

const Dashboard_summit = () => {
    const navigate = useNavigate();

  return (
    <div className="dashboard">
      <img
        className="logos"
        alt=" background image"
        src={Esummit}
      />

      <button class="rounded-button" onClick={()=>{navigate('/e_summit_2024/registration')}}>REGISTER NOW</button>
    </div>
  );
};

export default Dashboard_summit;
