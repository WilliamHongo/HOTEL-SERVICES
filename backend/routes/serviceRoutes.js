const express = require('express');
const Service = require('../models/serviceModel');
const router = express.Router();

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new service
router.post('/', async (req, res) => {
  const service = new Service({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
