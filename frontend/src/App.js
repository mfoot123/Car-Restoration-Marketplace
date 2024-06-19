import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Cover';
import ShopPage from './ShopPage'; // Assuming you have created ShopPage component
import AboutPage from './AboutPage';
import BoschPage from './BoschPage';
import PorschePage from './PorschePage';
import PierburgPage from './PierburgPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop/BoschPage" element={<BoschPage />} />
        <Route path="/shop/PorschePage" element={<PorschePage />} />
        <Route path="/shop/PierburgPage" element={<PierburgPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
