import React from 'react';
import Navbar from './startupexpo/Navbar/Navbar';
import Hero from './startupexpo/Hero/Hero';
import About from './startupexpo/About/About';
import WhyAttend from './startupexpo/WhyAttend/WhyAttend';
import Schedule from './startupexpo/Schedule/Schedule';
import Criteria from './startupexpo/Criteria/Criteria';
import Passes from './startupexpo/Passes/Passes';
import Contact from './startupexpo/Contact/Contact';
import Footer from './startupexpo/Footer/Footer';
import StarryBackground from './startupexpo/StarryBackground/StarryBackground';
import './startupexpo.css';
import Register from './startupexpo/register/Register';
function Startup() {
  return (
    <div className="startup-expo-app">
      <StarryBackground />
      <Navbar />
      <Hero />
      <About />
      <WhyAttend />
      <Schedule />
      <Criteria />
      <Passes />
      <Register/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Startup;