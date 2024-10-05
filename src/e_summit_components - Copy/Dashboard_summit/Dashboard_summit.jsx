import React from "react";
import "./dashboard_summit.css";
import Parichay from "../../images/PUNIT_G-removebg-preview.png";
import { useNavigate } from 'react-router-dom';

const Dashboard_summit = () => {
    const navigate = useNavigate();

  return (
    <div className="dashboarddd">
      <img
        className="logos"
        alt=" background image"
        src={Parichay}
      />

      <a href="#"><button class="rounded-button">REGISTER NOW</button></a>
    </div>
  );
};

export default Dashboard_summit;
