import { useState, useEffect } from 'react'
import './esummit.css'
import Hero from './esummit25/Hero'
import Navbar from './esummit25/Navbar'
import AboutUs from './esummit25/AboutUs'
import Timeline from './esummit25/Timeline'
import Preloader from './esummit25/Preloader'
import StarryBackground from './esummit25/StarryBackground'
import SpeakerSection from './esummit25/SpeakerSection'
import ScrollIndicator from './esummit25/ScrollIndicator'
import Footer from './esummit25/Footer'
import SponsorSection from './esummit25/SponsorSection'
import PatronsSection from './esummit25/PatronsSection'

// Import the image properly
import imageStar from './assets/image_star.png';

function Esummit() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <>
    <div className="portrait-warning">
      Please rotate your device to landscape mode for the best experience.
    </div>
      {loading && <Preloader onLoadComplete={() => setLoading(false)} />}
      <div className="app-container" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <StarryBackground 
          starCount={200}
          trailCount={3}
          trailSpeed={1.5}
          fadeSpeed={0.012}
        />
        <Navbar />
        <Hero />
        <ScrollIndicator />
        <div className="dummy">
          {/* Use the imported image here */}
          <img src={imageStar} alt="Star" />
          <img src={imageStar} alt="Star" />
          <img src={imageStar} alt="Star" />
          <img src={imageStar} alt="Star" />
          <img src={imageStar} alt="Star" />
        </div>
        <div className="content-sections">
          
          <section id="about" >
          <AboutUs />
          </section>
          <section id="events" className="section">
            <Timeline />
          </section>

          <section id="speakers" className="section">
            <SpeakerSection />
          </section>
          
          <SponsorSection />

          

        
        </div>
        <section id="patrons">
        <PatronsSection />
          </section>
        
        <Footer />
      </div>
    </>
  )
}

export default Esummit;
