import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaymentForm } from 'react-square-web-payments-sdk';
import Cover from './Cover';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import BoschPage from './BoschPage';
import PorschePage from './PorschePage';
import PierburgPage from './PierburgPage';
import Cart from './Cart';
import Payment from './Payment'; // Assuming this is for another payment-related functionality

function App() {

  const paymentFormProps = {
    applicationId: "sandbox-sq0idb-lP8QGiQrqXq7fcINKMzA7w",
    locationId: "LZ6AV300Z7P09",
    cardTokenizeResponseReceived: async (errors, nonce, cardData) => {
      if (errors) {
        console.error('Encountered errors:', errors);
        return;
      }
  
      // Example amount in cents (e.g., $10.00)
      const amount = 1000;
  
      const paymentPayload = {
        source_id: nonce,
        amount: amount,
      };
  
      try {
        const response = await fetch('/api/square/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentPayload),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Payment successful:', data);
          // Optionally handle success response in your frontend
        } else {
          console.error('Payment failed:', response.statusText);
          // Optionally handle failure response in your frontend
        }
      } catch (error) {
        console.error('Error processing payment:', error);
        // Optionally handle network or other errors in your frontend
      }
    },
  };
  
  

  return (
    <PaymentForm {...paymentFormProps}>
      <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop/BoschPage" element={<BoschPage />} />
          <Route path="/shop/PorschePage" element={<PorschePage />} />
          <Route path="/shop/PierburgPage" element={<PierburgPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payment />} />
        </Routes>
      </Router>
    </PaymentForm>
  );
}

export default App;
