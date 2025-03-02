import { useState, useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import { useInView } from 'react-intersection-observer';
import'./SponsorSection.css'

const SponsorSection = () => {
  const [eventsVisible, setEventsVisible] = useState(false);
  const [sponsorsRef, sponsorsInView] = useInView({
    threshold: 0.1
  });
  const [eventsRef, eventsInView] = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) {
        setEventsVisible(true);
      }
    }
  });

  return (
    <>
      {/* Events section observer */}
      <div ref={eventsRef} style={{ position: 'absolute', top: '0', height: '1px', width: '100%' }} />
      
      {/* Sponsors section */}
      <section 
        id="sponsors" 
        className="section" 
        ref={sponsorsRef}
        style={{
          opacity: eventsVisible && sponsorsInView ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          visibility: eventsVisible ? 'visible' : 'hidden'
        }}
      >
        <h2 className='sponsor-title'>Past Sponsors</h2>
        <Carousel />
      </section>
    </>
  );
};

export default SponsorSection;