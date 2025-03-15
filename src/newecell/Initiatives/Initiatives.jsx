
import React from 'react';
import { LightbulbIcon, GraduationCap, Users } from 'lucide-react';
import './Initiatives.css';

const Initiatives = () => {
  const initiatives = [
    {
      title: "Startup Incubation",
      description: "We provide mentorship, resources, and workspace to help turn your ideas into successful startups.",
      Icon: LightbulbIcon
    },
    {
      title: "E-Learning Program",
      description: "Access to courses, workshops, and learning materials to develop entrepreneurial skills.",
      Icon: GraduationCap
    },
    {
      title: "Networking Events",
      description: "Regular meetups with successful entrepreneurs, investors, and industry experts.",
      Icon: Users
    }
  ];

  return (
    <section className="initiatives-section">
      <div className="initiatives-container">
        <div className="initiatives-header">
          <h2 className="initiatives-title" data-text="One Start-Up at a Time!">Our Initiatives</h2>
          <p className="initiatives-description">
            E-cell or Entrepreneurship cell of VIT Bhopal is a community of like minded people, fostering the spirit of entrepreneurship. Our mission is to cultivate and empower the emerging visionaries of tomorrow, providing comprehensive guidance and unwavering support to transform groundbreaking ideas into successful ventures.
          </p>
        </div>

        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <div className="initiative-icon">
                <initiative.Icon size={24} />
              </div>
              <div className="initiative-content">
                <h3 className="initiative-card-title">{initiative.title}</h3>
                <p className="initiative-card-description">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;