import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import Technical from './components/Team/Technical';
import Recruitment from './components/Recruitment/Recruitment';

function App() {
  return (
    <div>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/e-cell-technical" element={<Technical />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
