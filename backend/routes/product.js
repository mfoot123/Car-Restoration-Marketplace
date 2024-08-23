const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST a new product
router.post('/', async (req, res, next) => {
  try {
    const { vendor, image, title, description, price } = req.body;

    const newProduct = await Product.create({
      vendor,
      image,
      title,
      description,
      price,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

// GET products by vendor
router.get('/', async (req, res, next) => {
  console.log('Received GET request for products with query:', req.query);
  try {
    const vendor = req.query.vendor;
    const whereClause = vendor ? { vendor } : {};
    const products = await Product.findAll({ where: whereClause });
    console.log('Products found:', products);
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    next(err);
  }
});

module.exports = router;