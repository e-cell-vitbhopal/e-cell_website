import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const allEvents = {
  "2024": [
    {
      id: 1,
      title: "Startup Summit",
      date: "March 15, 2024",
      description: "Annual entrepreneurship summit featuring renowned speakers and networking opportunities.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      registerLink: "https://example.com/register/startup-summit-2024"
    },
    {
      id: 2,
      title: "Pitch Perfect",
      date: "April 2, 2024",
      description: "Startup pitch competition with mentorship sessions and funding opportunities.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
      registerLink: "https://example.com/register/pitch-perfect-2024"
    },
  ],
  "2025": [
    {
      id: 3,
      title: "Innovation Workshop",
      date: "May 10, 2025",
      description: "Hands-on workshop focusing on product development and market research.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
      registerLink: "https://example.com/register/innovation-workshop-2025"
    },
    {
      id: 4,
      title: "Hackathon 2025",
      date: "June 5-7, 2025",
      description: "48-hour coding marathon to build innovative solutions for real-world problems.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1000",
      registerLink: "https://example.com/register/hackathon-2025"
    },
  ],
  "2026": [
    {
      id: 5,
      title: "Tech Conference",
      date: "February 15, 2026",
      description: "Global tech conference featuring latest innovations and industry trends.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      registerLink: "https://example.com/register/tech-conference-2026"
    },
    {
      id: 6,
      title: "AI Summit",
      date: "July 20, 2026",
      description: "Exploring the future of artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
      registerLink: "https://example.com/register/ai-summit-2026"
    },
  ],
};

const TimelineEvent = ({ event, index }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1468);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1468);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isMobile ? 200 : (index % 2 === 0 ? 1000 : -1000), isMobile ? 0: (index%2 === 0? 0 : -365.5 )]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x
      }}
      className={`timeline-event ${index % 2 === 0 ? 'even' : 'odd'}`}
    >
      <div className="event-content">
        <div className="event-card">
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
          />
          <div className="event-details">
            <div className="event-content-wrapper">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
            <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="register-button">
              Register Now
            </a>
          </div>
        </div>
      </div>
      <div
        className="timeline-connector"
        style={{
           left: isMobile ? "0%" : index % 2 === 0 ? event.dotPositionEven || "50%" : event.dotPositionOdd || "102.2%"
        }}
      ></div>
    </motion.div>
  );
};

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  
  const getFilteredEvents = () => {
    if (selectedYear === "all") {
      return Object.values(allEvents).flat();
    }
    return allEvents[selectedYear] || [];
  };

  return (
    <div className="timeline-container">
      <div className="timeline-name">EVENTS</div>
      <div className="timeline-filters">
        <button
          onClick={() => setSelectedYear("all")}
          className={`filter-button ${selectedYear === "all" ? 'active' : ''}`}
        >
          All Events
        </button>
        {Object.keys(allEvents).map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`filter-button ${selectedYear === year ? 'active' : ''}`}
          >
            {year}
          </button>
        ))}
      </div>
    
      <div className="timeline">
        {getFilteredEvents().map((event, index) => (
          <TimelineEvent key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;