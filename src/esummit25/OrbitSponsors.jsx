import React from "react";
import "./Orbit.css";
import sp1 from "../assets/investors/sp1.jpeg";
import sp2 from "../assets/investors/sp2.jpeg";
import sp3 from "../assets/investors/sp3.jpeg";
import sp4 from "../assets/investors/sp4.png";
import sp5 from "../assets/investors/sp5.jpg";
import sp7 from "../assets/investors/sp7.png";
import sp8 from "../assets/investors/sp8.png";
import sp9 from "../assets/investors/sp9.png";
import sp10 from "../assets/investors/sp10.png";
import sp11 from "../assets/investors/sp11.webp";
import sp12 from "../assets/investors/sp12.jpeg";
const investors = [
  { name: "Investor 1", orbit: 1, image: sp1, startAngle: 0 },
  { name: "Investor 2", orbit: 1, image: sp2, startAngle: 180 },
  { name: "Investor 3", orbit: 2, image: sp3, startAngle: 90 },
  { name: "Investor 4", orbit: 2, image: sp4, startAngle: 270 },
  { name: "Investor 5", orbit: 3, image: sp5, startAngle: 0 },
  { name: "Investor 7", orbit: 3, image: sp7, startAngle: 120 },
  { name: "Investor 8", orbit: 3, image: sp8, startAngle: 240 },
  { name: "Investor 9", orbit: 4, image: sp9, startAngle: 0 },
  { name: "Investor 10", orbit: 4, image: sp10, startAngle: 90 },
  { name: "Investor 11", orbit: 4, image: sp11, startAngle: 180 },
  { name: "Investor 12", orbit: 4, image: sp12, startAngle: 270 }
];

const Investors = () => {
  const getInvestorStyle = (orbit, startAngle) => {
    const animationDuration = `${orbit * 15}s`;
    const animationName = `investors-orbit${orbit}`;
    const initialRotation = `rotate(${startAngle}deg) translateX(${orbit * 75}px) rotate(-${startAngle}deg)`;
    const animationDelay = `-${(startAngle / 360) * parseInt(orbit * 15)}s`;

    return {
      animation: `${animationName} ${animationDuration} linear infinite`,
      transform: initialRotation,
      animationDelay: animationDelay,
      zIndex: 3
    };
  };

  return (
    <div className="investors-container">
      <div className="investors-content">
        <div className="investors-center-text">Investors</div>
        <div className="investors-ring investors-path-1"></div>
        <div className="investors-ring investors-path-2"></div>
        <div className="investors-ring investors-path-3"></div>
        <div className="investors-ring investors-path-4"></div>

        {investors.map((investor, index) => (
          <div
            key={index}
            className="investors-logo"
            style={getInvestorStyle(investor.orbit, investor.startAngle)}
            title={investor.name}
          >
            <img src={investor.image} alt={investor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investors;
