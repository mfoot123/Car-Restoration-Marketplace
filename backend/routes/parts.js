const express = require('express');
const router = express.Router();
const Part = require('../models/part');

router.get('/', async (req, res, next) => {
  try {
    const parts = await Part.findAll();
    res.json(parts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
