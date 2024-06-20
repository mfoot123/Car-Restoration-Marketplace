const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const SquareConnect = require('square-connect');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Square credentials
const accessToken = 'EAAAl4JDpIfLUbqXnLndpp2DiFUgPhcXOvLms_XRVlv8M9gZSh5B79Jgb5iI2YKz'; // Replace with your Square access token
const locationId = 'LZ6AV300Z7P09'; // Replace with your Square location ID

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
app.post('/api/square/payments', async (req, res) => {
  const requestBody = {
    source_id: req.body.source_id,
    amount_money: {
      amount: req.body.amount,
      currency: 'USD', // Adjust based on your currency
    },
    location_id: locationId,
    idempotency_key: `${Date.now()}`,
  };

  console.log('Payment request:', requestBody); // Log the request body

  try {
    const response = await paymentsApi.createPayment(requestBody);
    console.log('Payment response:', response); // Log successful payment response
    res.status(200).json(response);
  } catch (error) {
    console.error('Error creating payment:', error);

    if (error.response && error.response.data) {
      console.error('Square API error:', error.response.data.errors);
      res.status(500).json({ error: error.response.data.errors });
    } else if (error.response && error.response.status === 401) {
      console.error('Square API error: Unauthorized');
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }  
});

// Start server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
