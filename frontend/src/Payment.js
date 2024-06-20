import React from 'react';
import Navbar from './Navbar';
import { CreditCard } from 'react-square-web-payments-sdk';

const PaymentForm = ({ cart }) => {
  // Calculate the total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Navbar />
      <h2>Payment Form</h2>
      <div>
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty. Please add items to your cart before proceeding to payment.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
              ))}
            </ul>
            <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            <CreditCard />
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
