import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import Technical from './components/Team/Technical';
import Recruitment from './components/Recruitment/Recruitment';
import Summit from './Summit';
import Registration from './e_summit_components/Registration/Registration';
import FormLinks from './e_summit_components/Registration/FormLinks';
import IshaanSharma from './e_summit_components/Registration/IshaanSharma';
import ProductDesign from './e_summit_components/Registration/ProductDesign';
import InternshipFair from './e_summit_components/Registration/InternshipFair';
import IPLAuction from './e_summit_components/Registration/IPLAuction';
import SilentDisco from './e_summit_components/Registration/SilentDisco';
import FireSideChat from './e_summit_components/Registration/FireSideChat';
import CaseStudyCompetition from './e_summit_components/Registration/CaseStudyCompetition';
import PaperTrading from './e_summit_components/Registration/PaperTrading';

function App() {
  return (
    <div>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/e-cell-technical" element={<Technical />} />
          <Route path="/recruitment" element={<Recruitment />} />
          {/* Esummit */}
          <Route path="/e_summit_2024" element={<Summit />} />
          <Route path="/e_summit_2024/registration" element={<FormLinks />} />
          <Route path="/e_summit_2024/registration/IshaanSharma" element={<IshaanSharma />} />
          <Route path="/e_summit_2024/registration/ProductDesign" element={<ProductDesign />} />
          <Route path="/e_summit_2024/registration/InternshipFair" element={<InternshipFair />} />
          <Route path="/e_summit_2024/registration/IPLAuction" element={<IPLAuction />} />
          <Route path="/e_summit_2024/registration/SilentDisco" element={<SilentDisco />} />
          <Route path="/e_summit_2024/registration/FireSideChat" element={<FireSideChat />} />
          <Route path="/e_summit_2024/registration/CaseStudyCompetition" element={<CaseStudyCompetition />} />
          <Route path="/e_summit_2024/registration/PaperTrading" element={<PaperTrading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
