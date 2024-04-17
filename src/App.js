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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
