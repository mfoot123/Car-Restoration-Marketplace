import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Cover';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import BoschPage from './BoschPage';
import PorschePage from './PorschePage';
import PierburgPage from './PierburgPage';
import Cart from './Cart';
import PaymentForm from './Payment';
import { PaymentForm as SquarePaymentForm } from 'react-square-web-payments-sdk';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
  };

  const paymentFormProps = {
    applicationId: "sandbox-sq0idb-lP8QGiQrqXq7fcINKMzA7w",
    locationId: "LZ6AV300Z7P09",
    cardTokenizeResponseReceived: async (responseObj, cardData) => {
      console.log('Before errors');
      const { token } = responseObj;
      const nonce = token;
      console.log('Nonce:', nonce);
      // Calculate total cart amount
      const amount = cart.reduce((acc, item) => acc + item.price, 0) * 100; // Convert to cents
      const paymentPayload = {
        source_id: nonce,
        amount: amount,
      };
      console.log(nonce);
      console.log('Before fetch');
      try {
        const response = await fetch('http://localhost:4000/api/square/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentPayload),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Payment successful:', data);
        } else {
          console.error('Payment failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error processing payment:', error);
      }
    },
  };

  return (
    <SquarePaymentForm {...paymentFormProps}>
      <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop/BoschPage" element={<BoschPage addToCart={addToCart} />} />
          <Route path="/shop/PorschePage" element={<PorschePage addToCart={addToCart} />} />
          <Route path="/shop/PierburgPage" element={<PierburgPage addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} />} />
          <Route path="/payments" element={<PaymentForm cart={cart} />} />
        </Routes>
      </Router>
    </SquarePaymentForm>
  );
}

export default App;
