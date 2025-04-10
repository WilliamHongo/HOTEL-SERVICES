const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://myhotel-services.netlify.app', // Your Netlify frontend URL
};

app.use(cors(corsOptions)); // Use CORS options here

// Middleware
app.use(express.json()); // For parsing JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
const serviceRoutes = require('./routes/serviceRoutes'); // We'll create this in the next step
app.use('/api/services', serviceRoutes); // API route for services

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
