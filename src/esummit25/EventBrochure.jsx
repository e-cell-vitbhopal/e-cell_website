import React from 'react';
import { useParams } from 'react-router-dom';
import StarryBackground from './StarryBackground';
import './EventBrochure.css';


const eventDetails = {
  3: {
    title: "Inaugration Ceremony And Kenote Session",
    date: "March 27, 2025",
    time: "9:30 AM - 1:00 PM",
    venue: "Main Auditorium, VIT Bhopal",
    description: "Join us for our annual entrepreneurship summit featuring renowned speakers and networking opportunities. The session featured industry experts and thought leaders discussing emerging trends, innovations, and challenges, providing valuable insights and inspiring future advancements."
,
    highlights: [
      "Inaugural Ceremony & Keynote Session – Esteemed speakers shared insights on industry trends and future innovations.",
      "Keynote Session – Experts shared insights on emerging trends, innovations, and future advancements",
    
    ],
    schedule: [
      { time: "10:00 AM", event: "Opening Ceremony" },
      { time: "11:00 AM", event: "Keynote Speech" },
    
    ],
    registration: {
      fee: "₹149",
      deadline: "March 10, 2024",
      link: "https://forms.gle/KAH78RSRxhTY9X869"
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }
  },
  2: {
    title: "Trading Arena",
    date: "March 27, 2025",
    time: "8:30 AM - 4:00 PM",
    venue: "TBD",
    description: "Step into the exhilarating world of stock trading with Trading Arena, where strategy meets opportunity! Whether you're a seasoned trader or a beginner looking to test your skills, this immersive live stock market simulation offers a thrilling experience. Compete with fellow participants, analyze real-time market updates, and make strategic investments to build the most profitable portfolio. With zero risk and maximum learning, this is your chance to enhance your investment knowledge, hone your decision-making skills, and win big! "
,
    highlights: [
      "Build & Manage Your Portfolio",
      "Engage in Real-time Market Trading",
      "Learn Investment Strategies",
      "Win Exciting Prizes!"
     
    ],
    schedule: [
      { time: "8:30 AM - 9:15 AM", event: "Portfolio Allocation" },
      { time: "9:15 AM - 12:30 PM", event: "Trading Session 1" },
      { time: "12:30 PM - 2:00 PM", event: "Lunch" },
      { time: "2:00 PM - 3:30 PM", event: "Trading Session 2" }
      
    
    ],
    registration: {
      fee: "Solo: ₹149 Duo: ₹249 Trio: ₹299 ",
      deadline: "March 27, 2025",
      link: "https://forms.gle/KAH78RSRxhTY9X869"
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }},
  4: {
    title: "Book Fair & Food Carnival",
    date: "March 27-29, 2025",
    time: "10:00 AM - 7:30 PM",
    venue: "Open Auditorium, VIT Bhopal",
    description: "The Book Fair at E-Summit 2025 is a specially curated event aimed at inspiring students through an extensive collection of books on entrepreneurship, business, technology, leadership, and personal development. This event is designed to cultivate a reading culture and provide essential resources to guide and motivate students on their entrepreneurial journeys."
,
    highlights: [
      "Book Exhibition – A diverse collection of books on startups, leadership, and business insights.",
 "Book Review Sessions – Interactive discussions on key takeaways from influential books.",
 "Networking Opportunities – Meet students and professionals with similar interests."

    
    ],
    schedule: [
      { time: "8:30 AM", event: "Opening" },
      { time: "7:30 PM", event: "Closing" },
    
    ],
    registration: {
      fee: "Open for all",
  
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }
  },
  5: {
    title: "IPL Auction",
    date: "March 28-29, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Main Auditorium, VIT Bhopal",
    description: "Get ready to experience the thrill of an IPL Auction at E-Summit 2025! This dynamic and interactive event allows college students to step into the shoes of team owners, strategizing and bidding for cricket players to form their ultimate dream teams."
,
    highlights: [
      "Team Formation: Register in teams of 3-5 members.",
"Virtual Budget: Each team gets ₹50 crores to bid for players.",
"Player Pool: Bidders select from a curated list of cricket players with base prices & ratings.",

    "Bidding Process: A live auction where teams compete to build their strongest squad.",
    "Surprise Element: Special Mystery Box Player introduced every few rounds!",
    "Winning Criteria: Teams with the highest-rated squad & remaining budget take the crown."

    
    ],
    schedule: [
      { time: "10:00 AM - 10:30 AM", event: "Opening Ceremony" },
      { time: "10:30 AM - 1:30 PM", event: "IPL Auction Slot1" },
      { time: "1:30 PM - 2:00 PM", event: "Break" },
      { time: "2:00 PM - 6:00 PM", event: "IPL Auction Slot2" }
      
    
    ],
    registration: {
      fee: "₹350",
      deadline: "March 26, 2025",
      link: "https://forms.gle/KAH78RSRxhTY9X869"
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }
  },
  6: {
    title: "Ecom Carnival",
    date: "March 28, 2025",
    time: "09:30 AM - 2:00 PM",
    venue: "TBD",
    description: "The E-Com Carnival at E-Summit 2025 is a one-of-a-kind event that introduces students to the world of drop shipping and e-commerce businesses. Hosted by the Entrepreneurship Cell, VIT Bhopal, this event will equip participants with valuable insights into online business, practical store-building experience, and engaging activities designed to educate, entertain, and inspire future entrepreneurs. Get ready to experience the thrill of an IPL Auction at E-Summit 2025! This dynamic and interactive event allows college students to step into the shoes of team owners, strategizing and bidding for cricket players to form their ultimate dream teams."
,
    highlights: [
      "Students eager to explore entrepreneurship & e-commerce", 
"Business enthusiasts looking to understand drop shipping",
"Anyone interested in learning how to start & scale an online business"


    
    ],
    schedule: [
      { time: "9:30 AM - 10:30 AM", event: "Opening Ceremony" },
      { time: "10:30 AM - 1:00 PM", event: "Workshop" },
      { time: "1:00 PM - 1:50 PM", event: "Business Challenge" },
      { time: "1:50 PM - 2:00 PM", event: "Closing Ceremony" }
      
    
    ],
    registration: {
      fee: "₹229",
      deadline: "March 28, 2025",
      link: "https://forms.gle/KAH78RSRxhTY9X869"
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }
  },
  7: {
    title: "The Board MUN",
    date: "March 29, 2025",
    time: "09:30 AM - 4:30 PM",
    venue: "Auditorium 2 AB01 VIT Bhopal",
    description: "The Board MUN is an action-packed corporate simulation where participants take on the roles of industry leaders, representing top multinational corporations. The event is structured as an intense business battleground where individual will compete through debates, strategic presentations, and brand defense challenges. Participants must think on their feet, tackle real-world business dilemmas, and craft compelling arguments to outmaneuver their rivals."
,
    highlights: [
      "Test real-world business strategies in a competitive setting",
      "Develop persuasive communication and decision-making skills",
      "Engage in dynamic corporate roleplay as CEOs and executives",
      "Network with industry enthusiasts and future business leaders",
      "Win prizes, gain recognition, and get certificate ",
      "Participation Kit and refreshments will be provided "
      


    
    ],
    schedule: [
      { time: "9:30 AM - 10:00 AM", event: "Opening Ceremony" },
      { time: "10:00 AM - 12:00 PM", event: "Round 1 Battle" },
      { time: "12:00 PM - 1:30 PM", event: "Quarter Finals" },
      { time: "1:30 PM - 2:00 PM", event: "Break" },
      { time: "2:00 PM - 3:00 PM", event: "Semifinals" },
      { time: "3:00 PM - 4:00 PM", event: "Grand Finale" },
      { time: "4:00 PM - 4:30 PM", event: "Closing Ceremony" }
      
    
    ],
    registration: {
      fee: "Participation: ₹199 Audience: ₹79 (audience gets exclusive voting power)",
      deadline: "March 29, 2025",
      link: "https://forms.gle/KAH78RSRxhTY9X869"
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }
  },
  8: {
    title: "Spreaker Session",
    date: "March 29, 2025",
    time: "09:00 AM - 12:30 PM",
    venue: "Main Auditorium AB01 VIT Bhopal",
    description: "The Main Speaker Session at E-Summit 2025 is a premier platform to inspire and educate aspiring entrepreneurs, students, and professionals. It features a keynote by an industry leader (TBD) on business strategies, leadership, and personal growth. The event begins with a pooja ceremony, followed by a welcome address and an introductory video of the speaker. A keynote session and interactive Q&A will engage attendees, concluding with an audience engagement reel and a vote of thanks."
,
    highlights: [
      " Inspire and educate future entrepreneurs",
"Promote networking and knowledge sharing",
"Enhance engagement through interactive sessions"
      


    
    ],
    schedule: [
      { time: "9:30 AM - 10:30 AM", event: "Opening Ceremony" },
      { time: "10:30 AM - 12:00 PM", event: "Keynote Speech" },
      { time: "12:00 PM - 12:30 PM", event: "Q&A Session" },
      { time: "12:30 PM - 1:00 PM", event: "Closing" }
      
    
    ],
    registration: {
      fee: "Participation: ₹200",
      deadline: "March 29, 2025",
      link: "https://forms.gle/KAH78RSRxhTY9X869"
    },
    contact: {
      email: "esummit@ecellvitbhopal.in",
    }
  },
  // Add similar detailed information for other events
};

const EventBrochure = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) {
    return <div className="event-not-found">Event not found</div>;
  }

  return (
    <div className="event-brochure">
      <StarryBackground starCount={200} trailCount={3} />
      <div className="brochure-content">
        <h1 className="event-title">{event.title}</h1>
        
        <section className="event-section">
          <h2>Event Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{event.date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Time:</span>
              <span className="detail-value">{event.time}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Venue:</span>
              <span className="detail-value">{event.venue}</span>
            </div>
          </div>
        </section>

        <section className="event-section">
          <h2>About the Event</h2>
          <p className="event-description">{event.description}</p>
        </section>

        <section className="event-section">
          <h2>Event Highlights</h2>
          <ul className="highlights-list">
            {event.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="event-section">
          <h2>Schedule</h2>
          <div className="schedule-timeline">
            {event.schedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <span className="schedule-time">{item.time}</span>
                <span className="schedule-event">{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="event-section">
          <h2>Registration Details</h2>
          <div className="registration-details">
            <p><strong>Fee:</strong> {event.registration.fee}</p>
            <p><strong>Deadline:</strong> {event.registration.deadline}</p>
            <a href={event.registration.link} className="register-button">
              Register Now
            </a>
          </div>
        </section>

        <section className="event-section">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <p><strong>Email:</strong> {event.contact.email}</p>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventBrochure;