const mongoose = require('mongoose');

// Define the schema for each selected service
const selectedServiceSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  }
});

// Define the main schema for service requests
const serviceSchema = new mongoose.Schema({
  guestName: {
    type: String,
    required: true
  },
  roomNumber: {
    type: String,
    required: true
  },
  complaintInquiry: {
    type: String,
    required: false
  },
  servicesRequested: [
    {
      serviceType: { 
        type: String,
        enum: ['Room Service', 'Housekeeping', 'Concierge', 'Spa & Wellness'],
        required: true
      },
      selectedServices: [selectedServiceSchema]  // Nested schema for selected services under each category
    }
  ]
});

// Create the Service model based on the schema
const Service = mongoose.model('Service', serviceSchema);

// Export the model for use in other parts of the app
module.exports = Service;
