import React from "react";
import "./dashboard_summit.css";
import Esummit from "../../images/Esummit.png";
import { useNavigate } from 'react-router-dom';

const Dashboard_summit = () => {
    const navigate = useNavigate();

  return (
    <div className="dashboarddd">
      <img
        className="logos"
        alt=" background image"
        src={Esummit}
      />

      <a href="#"><button class="rounded-button">REGISTER NOW</button></a>
    </div>
  );
};

export default Dashboard_summit;
