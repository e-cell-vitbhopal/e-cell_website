import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./newecell/Hero/Hero";
import Initiatives from "./newecell/Initiatives/Initiatives";
import Counter from "./newecell/Counter/Counter";
import EventExport from "./newecell/Event-Components/EventExport";
import OrbitSponsors from "./newecell/orbit/OrbitSponsors";
import Navbar from "./newecell/Navbar/Navbar";
import Footer from "./newecell/Footer/Footer";
import Preloader from "./newecell/Preloader/Preloader";
import MainSponsors from "./newecell/Carousel/MainSponsors";
import Speakers from "./newecell/Speakers/Speakers";
import Contact from "./newecell/Contact/Contact";
import "./newecell.css";
import NewNav from "./newecell/Navbar/Navbar";

function Main() {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to section when navigating from another page
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 70;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="newecell-app-container">
      <div className="center-dot"></div> {/* Dot at the center */}
      <div className="newecell-app-content">
        <Preloader />
        <NewNav />
        <main className="newecell-main">
          <Hero />
          <section id="newecell-initiatives-section">
            <Initiatives />
          </section>
          <Counter />
          <section id="newecell-main-events">
            <EventExport />
          </section>
          <section id="newecell-orbit-sponsors-container">
            <OrbitSponsors />
          </section>
          <section id="newecell-sponsors-section">
            <MainSponsors />
          </section>
          <section id="newecell-speakers-section">
            <Speakers />
          </section>
          <section id="newecell-contact-section">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}


export default Main;
