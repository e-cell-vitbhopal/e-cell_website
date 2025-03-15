import "./Teams.css";
import { useState, useEffect } from 'react';

export default function Teams() {
  const [rotation, setRotation] = useState(0);
  
  // Team data with names and member counts
  const teams = [
    { name: "Finance", members: 2 },
    { name: "Operation", members: 2 },
    { name: "Tech", members: 3 },
    { name: "Design", members: 2 },
    { name: "Socialmedia", members: 2 },
    { name: "Events", members: 3 },
    { name: "Content", members: 2 },
    { name: "Corpo", members: 3 }
  ];

  // Animation effect for rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="octagonal-container">
      {/* Center octagon (Corporate team) */}
      <div className="octagonal-shape center-octagon">
        <div className="team-name">Corporate</div>
        <div className="team-members">Team</div>
      </div>
      
      {/* Rotating container for the octagons */}
      <div 
        className="octagonal-card-container" 
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {teams.map((team, index) => (
          <div 
            key={index} 
            className="octagonal-shape" 
            style={{
              ...getPosition(index),
              transform: `translate(-50%, -50%) rotate(-${rotation}deg)` // Counter-rotate to keep text upright
            }}
          >
            <div className="team-name">{team.name}</div>
            <div className="team-members">{team.members}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getPosition(index) {
  // Calculate positions in a circular arrangement
  const angleStep = 360 / 8; // Degrees between each octagon
  const startAngle = -90; // Start from top (negative because CSS rotates clockwise)
  
  const angle = startAngle + (index * angleStep);
  const radians = (angle * Math.PI) / 180;
  
  // Calculate position based on angle and radius
  const top = 50 + Math.sin(radians) * 32; // Percentage from center
  const left = 50 + Math.cos(radians) * 32; // Percentage from center
  
  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}