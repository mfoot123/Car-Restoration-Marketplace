const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Route to render index.ejs with data from database
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from database
    res.render('index', { products }); // Render 'index.ejs' with products data
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

module.exports = router;
