import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sponsors from './components/sponsor-components/Sponsors';
import Teams from './components/Team-Components/Teams';
import Speakers from "./components/Speaker-Components/Speakers"
import EventExport from "./components/Event-Components/EventExport"
import Footer from './components/Footer-Components/Footer';
import Dashboard from './components/Dashboard-components/Dashboard';
import Navbar from './components/Dashboard-components/Navbar';

function Main() {
  return (
    <div>
    <Navbar />
      <Dashboard />
      <EventExport />
      <Teams />
      <Sponsors />
      <Speakers />
      <Footer />
    </div>
  )
}

export default Main;
