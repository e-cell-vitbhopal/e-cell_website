import React, { useState, useEffect, useRef } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [tabChanged, setTabChanged] = useState(false);
  const scheduleContentRef = useRef(null);
  
  const scheduleData = {
    1: [
      { time: '10:00 AM – 10:30 AM', event: 'Opening Ceremony & Welcome Address ', location: '' },
      { time: '10:30 AM – 02:00 PM', event: 'Startup Expo: The Ultimate Business Carnival ', location: '' },
      { time: '02:00 PM - 03:00 PM', event: 'Networking Lunch', location: '' },
      { time: '03:00 PM - 04:30 PM', event: 'Mini Event:The Ultimate Sales Showdown ', location: '' },
    ],
    2: [
      { time: '10:30 AM - 02:00 PM', event: 'Startup Expo', location: '' },
      { time: '02:00 PM - 03:00 PM', event: 'Networking Lunch', location: '' },
      { time: '03:00 PM - 04:00 PM', event: 'Mini Event: 5 Min CEO', location: '' },
      { time: '04:00 PM – 05:00 PM', event: 'Mini Event: Startup critique ', location: '' },
      { time: '05:00 PM - 06:00 PM', event: 'Closing Ceremony: Jamming / Chilling session within startups', location: '' },
    ]
  };

  // Handle tab change with animation
  const handleDayChange = (day) => {
    setActiveDay(day);
    setTabChanged(true);
    
    // Reset the animation after it completes
    setTimeout(() => {
      setTabChanged(false);
    }, 400);
  };

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay based on index
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 100);
            
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe each schedule item
    const observeItems = () => {
      const items = document.querySelectorAll('.startup-expo-schedule__item');
      items.forEach((item) => {
        observer.observe(item);
      });
    };

    // Initial observation
    observeItems();

    // Re-observe items when active day changes
    if (activeDay) {
      setTimeout(observeItems, 50); // Small delay to ensure DOM is updated
    }

    return () => {
      observer.disconnect();
    };
  }, [activeDay]);

  return (
    <section className="startup-expo-schedule" id="schedule">
      <div className="startup-expo-schedule__container">
        <h2 className="startup-expo-schedule__title">Event Schedule</h2>
        <div className="startup-expo-schedule__tabs">
          <button 
            className={`startup-expo-schedule__tab ${activeDay === 1 ? 'startup-expo-schedule__tab--active' : ''}`}
            onClick={() => handleDayChange(1)}
          >
            Day 1
          </button>
          <button 
            className={`startup-expo-schedule__tab ${activeDay === 2 ? 'startup-expo-schedule__tab--active' : ''}`}
            onClick={() => handleDayChange(2)}
          >
            Day 2
          </button>
         
        </div>
        <div 
          ref={scheduleContentRef}
          className={`startup-expo-schedule__content ${tabChanged ? 'animate-tab-change' : ''}`}
        >
          {scheduleData[activeDay].map((item, index) => (
            <div className="startup-expo-schedule__item" key={index}>
              <div className="startup-expo-schedule__time">{item.time}</div>
              <div className="startup-expo-schedule__details">
                <h3 className="startup-expo-schedule__event">{item.event}</h3>
                <p className="startup-expo-schedule__location">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;