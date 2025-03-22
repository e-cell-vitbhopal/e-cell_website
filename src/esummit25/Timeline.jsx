import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import inauguralImg from "../assets/events-images/inaugral.png";
import stockTradingImg from "../assets/events-images/Stock Trading .png";
import startupExpoImg from "../assets/events-images/Startup.png";
import fairImg from "../assets/events-images/fair .png";
import iplImg from "../assets/events-images/ipl.png";
import connectImg from "../assets/events-images/Connect.png";
import ecomImg from "../assets/events-images/ecom.png";
import boardImg from "../assets/events-images/Board.png";
import speakerImg from "../assets/events-images/Speaker.jpeg";
import studyImg from "../assets/events-images/Study.png";
const allEvents = {
  "27 March, 2025": [
    {
      id: 3,
      title: "Inaugural Ceremony",
      date: "March 27, 2025",
      description: "The inaugural ceremony marked the event's commencement, followed by a keynote session featuring expert insights, innovations, and discussions on key topics.",
      image: inauguralImg,
      registerLink: "https://example.com/register/startup-summit-2024"
    },
    {
      id: 2,
      title: "Stock Trading",
      date: "March 27, 2025",
      description: "Stock Trading is an exciting event in the E-Summit where participants simulate real-time trading, analyze market trends, and make strategic investment decisions.",
      image: stockTradingImg,
      registerLink: "https://example.com/register/pitch-perfect-2024"
    },
    {
      id: 1,
      title: "Startup Expo",
      date: "March 27-28, 2025",
      description: "The Startup Expo connects startups, entrepreneurs, and investors through panels, workshops, and pitches, fostering innovation, collaboration, and real-world insights.",
      image: startupExpoImg,
      registerLink: "https://example.com/register/pitch-perfect-2024"
    },
    {
      id: 4,
      title: "Book Fair & Food Carnival",
      date: "March 27-29, 2025",
      description: "Book Fair & Food Carnival at E-Summit is an open event offering a diverse collection of books and a variety of delicious cuisines.",
      image: fairImg,
      registerLink: "https://example.com/register/pitch-perfect-2024"
    }
  ],
  "28 March, 2025": [
    {
      id: 5,
      title: "IPL Auction",
      date: "March 28-29, 2025",
      description: "IPL Auction at E-Summit is a strategic bidding event where participants act as team owners, analyzing player stats, managing budgets, and competing to build the best team.",
      image: iplImg,
      registerLink: "https://example.com/register/innovation-workshop-2025"
    },
    {
      id: 7,
      title: "Innovators Connect",
      date: "March 28, 2025",
      description: "Innovators Connect is a dynamic platform that brings together entrepreneurs, creatives, and industry leaders to collaborate, share ideas, and drive innovation.",
      image: connectImg,
      registerLink: "https://example.com/register/innovation-workshop-2025"
    },
    {
      id: 6,
      title: "Ecom Carnival",
      date: "March 28, 2025",
      description: "E-Com Carnival at E-Summit is a workshop where industry experts guide participants on taking businesses online, covering e-commerce strategies and digital marketing.",
      image: ecomImg,
      registerLink: "https://example.com/register/hackathon-2025"
    }
  ],
  "29 March, 2025": [
    {
      id: 8,
      title: "The Board MUN",
      date: "March 29, 2025",
      description: "Board MUN is a corporate simulation event where participants represent multinational corporations, strategizing, negotiating, and defending brand interests.",
      image: boardImg,
      registerLink: "https://example.com/register/tech-conference-2026"
    },
    {
      id: 9,
      title: "Speaker Session",
      date: "March 29, 2025",
      description: "Speaker Session at E-Summit features industry experts sharing insights, experiences, and strategies on entrepreneurship, innovation, and business growth.",
      image: speakerImg,
      registerLink: "https://example.com/register/ai-summit-2026"
    },
    {
      id: 10,
      title: "Study Abroad Session",
      date: "March 29, 2025",
      description: "Study Abroad Session at E-Summit provides insights into global education opportunities, guiding students on applications, scholarships, and career prospects.",
      image: studyImg,
      registerLink: "https://example.com/register/ai-summit-2026"
    }
  ]
};

const TimelineEvent = ({ event }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x }} className="timeline-event">
      <div className="event-content">
        <div className="event-card">
          <img src={event.image} alt={event.title} className="event-imagex" />
          <div className="event-details">
            <div className="event-content-wrapper">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
            <a href={`/event/${event.id}`} target="_blank" rel="noopener noreferrer" className="register-button">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="timeline-connector" style={{ left: "0%" }}></div>
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
        <button onClick={() => setSelectedYear("all")} className={`filter-button ${selectedYear === "all" ? 'active' : ''}`}>All Events</button>
        {Object.keys(allEvents).map((year) => (
          <button key={year} onClick={() => setSelectedYear(year)} className={`filter-button ${selectedYear === year ? 'active' : ''}`}>{year}</button>
        ))}
      </div>
      <div className="timeline">
        {getFilteredEvents().map((event) => (
          <TimelineEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
