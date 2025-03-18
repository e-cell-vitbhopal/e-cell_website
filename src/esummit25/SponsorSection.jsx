import { useState } from 'react';
import Carousel from './Carousel/Carousel';
import { useInView } from 'react-intersection-observer';
import './SponsorSection.css';

const SponsorSection = () => {
  const [eventsVisible, setEventsVisible] = useState(false);

  const { ref: sponsorsRef, inView: sponsorsInView } = useInView({
    threshold: 0.1
  });

  const { ref: eventsRef, inView: eventsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) {
        setEventsVisible(true);
      }
    }
  });

  return (
    <>
      <div ref={eventsRef} style={{ position: 'absolute', top: '0', height: '50px', width: '100%' }} />

      <section 
        id="sponsors" 
        className="section" 
        ref={sponsorsRef}
        style={{
          opacity: eventsVisible && sponsorsInView ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          display: eventsVisible ? 'block' : 'none'
        }}
      >
        <h2 className='sponsor-title'>Past Sponsors</h2>
        <Carousel />
      </section>
    </>
  );
};

export default SponsorSection;
