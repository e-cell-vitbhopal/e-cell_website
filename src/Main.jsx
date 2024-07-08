import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
import PopUp from "./components/Dashboard/PopUp"
// import Founder from './components/Founder/Founder';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function Main() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      {/* <Founder /> */}
      {/* <PopUp/> */}
      <Events />
      <Team />
      <Footer />
    </div>
  )
}

export default Main;
