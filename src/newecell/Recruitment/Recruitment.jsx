import React from 'react';
import { 
  Code, 
  DollarSign, 
  Calendar, 
  Mic, 
  Palette, 
  FileText, 
  Share2, 
  Briefcase, 
  Lightbulb 
} from 'lucide-react';
import './Recruitment.css';

const Recruitment = () => {
  const teams = [
    {
      name: "Technical Team",
      description: "Build and maintain our digital infrastructure, develop innovative solutions, and drive technological advancement.",
      icon: Code,
      link: "https://forms.gle/jHCs4ZHmjxUXJSju7",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#374151"
    },
    {
      name: "Finance and Sponsorship Team",
      description: "Manage financial operations and secure strategic partnerships to fuel our initiatives.",
      icon: DollarSign,
      link: "https://forms.gle/NqQsS93kKcnYu5GV7",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#b45309"
    },
    {
      name: "Events Team",
      description: "Organize and execute engaging events that inspire and connect the entrepreneurial community.",
      icon: Calendar,
      link: "https://forms.gle/wdD7wwan9jYTMrPx7",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#0369a1"
    },
    {
      name: "Podcast Team",
      description: "Create compelling audio content featuring entrepreneurial stories and insights.",
      icon: Mic,
      link: "https://forms.gle/2HF4F67fNayH71Jd8",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      color: "#059669"
    },
    {
      name: "Design Team",
      description: "Craft beautiful visual experiences and bring creative concepts to life.",
      icon: Palette,
      link: "https://forms.gle/n68xXsUNNF5Y8Wrf6",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      color: "#be185d"
    },
    {
      name: "Content Team",
      description: "Develop engaging content that educates, informs, and inspires our community.",
      icon: FileText,
      link: "https://forms.gle/JMqssZuNUcnggNqZ6",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      color: "#7c3aed"
    },
    {
      name: "Social Media Team",
      description: "Amplify our voice across digital platforms and engage with our audience.",
      icon: Share2,
      link: "https://forms.gle/T1rjMKonJy6ShSwv8",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      color: "#0891b2"
    },
    {
      name: "Corporate Team",
      description: "Build relationships with industry leaders and establish corporate partnerships.",
      icon: Briefcase,
      link: "https://forms.gle/eD6Qrbx3ivUteswJ8",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      color: "#475569",
      comingSoon: false
    },
    {
      name: "Startup and Incubation Team",
      description: "Support budding entrepreneurs in transforming their ideas into successful ventures.",
      icon: Lightbulb,
      link: "https://docs.google.com/forms/d/1L5jwlh7ZbYxzX5rE2cth6HpdnVjIvVBblYsqu0tJfAI/edit",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      color: "#fb923c",
      comingSoon: false
    }
  ];

  const handleApply = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="recruitment-section">
      <div className="recruitment-container">
        <div className="recruitment-header">
          <h2 className="recruitment-title">Join Our Team</h2>
          <p className="recruitment-description">
            Be part of a dynamic community that transforms ideas into reality. Choose your passion and make an impact.
          </p>
        </div>

        <div className="recruitment-grid">
          {teams.map((team, index) => {
            const IconComponent = team.icon;
            return (
              <div 
                key={index} 
                className={`recruitment-card ${team.comingSoon ? 'coming-soon' : ''}`}
                onClick={() => !team.comingSoon && handleApply(team.link)}
                style={{ '--gradient': team.gradient, '--icon-color': team.color, '--button-color': team.color }}
              >
                <div className="recruitment-card-background"></div>
                <div className="recruitment-card-content">
                  <div className="recruitment-icon-wrapper">
                    <IconComponent size={28} className="recruitment-icon" />
                  </div>
                  <h3 className="recruitment-card-title">{team.name}</h3>
                  <p className="recruitment-card-description">{team.description}</p>
                  <div className="recruitment-card-footer">
                    {team.comingSoon ? (
                      <span className="coming-soon-badge">Coming Soon</span>
                    ) : (
                      <button className="apply-button">
                        Apply Now
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow-icon"
                        >
                          <path 
                            d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
