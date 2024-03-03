// routes/pizza.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Pizza = require('../models/Pizza');

// Get all pizzas
router.get('/', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Other routes for pizza CRUD operations can be added here

module.exports = router;
