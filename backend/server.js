const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const SquareConnect = require('square-connect');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Square credentials
const accessToken = 'EAAAl4JDpIfLUbqXnLndpp2DiFUgPhcXOvLms_XRVlv8M9gZSh5B79Jgb5iI2YKz';
const locationId = 'LZ6AV300Z7P09';

// Square client configuration
const defaultClient = SquareConnect.ApiClient.instance;
defaultClient.basePath = 'https://connect.squareupsandbox.com';

// Set sandbox access token
defaultClient.authentications['oauth2'].accessToken = accessToken;

// Create an instance of the Square Payments API
const paymentsApi = new SquareConnect.PaymentsApi();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle payment creation
app.post('/api/square/payment', async (req, res) => {
  const requestBody = {
    source_id: req.body.source_id,
    amount_money: {
      amount: req.body.amount,
      currency: 'USD',
    },
    location_id: locationId,
    idempotency_key: `${Date.now()}`,
  };

  console.log('Payment request:', requestBody); 

  try {
    const response = await paymentsApi.createPayment(requestBody);
    console.log('Payment response:', response);
    res.status(200).json(response);
  } catch (error) {
    console.error('Error creating payment:', error);
  
    let status = 500;
    let errorMessage = 'Unknown error occurred';
  
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Square API error: Unauthorized');
        status = 401;
        errorMessage = 'Unauthorized';
      } else if (error.response.data && error.response.data.errors) {
        console.error('Square API error:', error.response.data.errors);
        errorMessage = error.response.data.errors;
      }
    }
  
    res.status(status).json({ error: errorMessage });
  }
});

// Start server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
