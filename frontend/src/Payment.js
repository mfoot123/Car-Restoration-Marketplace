import React, { useState } from 'react';
import { CreditCard } from 'react-square-web-payments-sdk';

const PaymentForm = () => {
  return (
    <div>
      <h2>Payment Form</h2>
      <CreditCard/>
    </div>
  );
};

export default PaymentForm;
