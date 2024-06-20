import React, { useState } from 'react';
import { CreditCard } from 'react-square-web-payments-sdk';

const PaymentForm = () => {
  const [paymentResponse, setPaymentResponse] = useState(null);

  const handleCardNonceResponseReceived = async (errors, nonce, cardData) => {
    if (errors) {
      console.error('Encountered errors:', errors);
      return;
    }

    const paymentPayload = {
      source_id: nonce,
      amount: 1000, // Example amount in cents (e.g., $10.00)
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
        setPaymentResponse(data);
      } else {
        console.error('Payment failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <CreditCard
      />
      {paymentResponse && (
        <div>
          <h3>Payment Response:</h3>
          <pre>{JSON.stringify(paymentResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
