const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Import routes
const datafileRoute = require('./routes/datafileRoute');
const AeronauticalJobsRoute = require('./routes/AeronauticalJobsRoute');
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}));

// Define basic route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Use routes
app.use('/api/datafiles', datafileRoute);
app.use('/api/aeronautical-jobs', AeronauticalJobsRoute);

// Connect to MongoDB
const MongoURL = process.env.MONGO_URL;
mongoose.connect(MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch((err) => {
  console.error('Connection failed:', err);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
