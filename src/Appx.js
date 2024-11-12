import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Consolax from '../components/Consolax';
import Construccion1 from '../components/Construccion';
const Appx = () => {
  return (
    <div>
      <Router>
          <Routes>
          <Route path="/" element={<Construccion1/>} />
          <Route path="/portfolio" element={<Consolax/>} />
          </Routes>
      </Router>
    </div>
  );
};

export default Appx;

