const express = require('express');
const router = express.Router();
const Part = require('../models/Part');

// GET all parts
router.get('/', async (req, res, next) => {
  try {
    const parts = await Part.findAll();
    res.json(parts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
