import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Cover';
import ShopPage from './ShopPage'; // Assuming you have created ShopPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
