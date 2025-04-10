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

// Add a new service request (POST method for /request route)
router.post('/request', async (req, res) => {
  const serviceRequest = new Service({
    guestName: req.body.guestName,
    roomNumber: req.body.roomNumber,
    complaintInquiry: req.body.complaintInquiry,
    servicesRequested: req.body.servicesRequested,
  });

  try {
    const newServiceRequest = await serviceRequest.save();
    res.status(201).json(newServiceRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
