import React, { useState } from 'react';
import Navbar from './Navbar';
import { CreditCard } from 'react-square-web-payments-sdk';

const PaymentForm = () => {
  return (
    <div>
      <Navbar />
      <h2>Payment Form</h2>
      <CreditCard/>
    </div>
  );
};

export default PaymentForm;
