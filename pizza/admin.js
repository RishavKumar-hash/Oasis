// routes/admin.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Inventory = require('../models/Inventory');

// Get inventory
router.get('/inventory', auth, async (req, res) => {
  try {
    const inventory = await Inventory.findOne({ admin: req.user.id });

    if (!inventory) {
      return res.status(400).json({ msg: 'Inventory not found' });
    }

    res.json(inventory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Other routes for inventory management can be added here

module.exports = router;
