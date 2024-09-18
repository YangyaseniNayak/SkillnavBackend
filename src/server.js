const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();;
const path = require('path');


// Load environment variables
dotenv.config();

// Import routes
const datafileRoute = require('./routes/User/datafileRoute');
const AeronauticalJobsRoute = require('./routes/User/AeronauticalJobsRoute');
const messagefileRoute = require('./routes/User/messagefileRoute');
const applicationsRoute = require('./routes/User/applicationsRoute');
const savedJobsRoute = require('./routes/User/savedJobsRoute');
const profileRoute = require('./routes/User/profileRoute');
const supportfileRoute = require('./routes/User/supportfileRoute');
const partnerProfileRoute = require('./routes/Partner/partnerProfileRoute');
const InternshipRoute = require('./routes/Partner/InternshipRoute');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

//Cross policy
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
app.use('/api/messagefiles', messagefileRoute);
app.use('/api/applications', applicationsRoute);
app.use('/api/savedJobs', savedJobsRoute);
app.use('/api/profiles', profileRoute);
app.use('/api/supportfiles', supportfileRoute);
app.use('/api/partnerProfiles', partnerProfileRoute);
app.use('/api/Internships', InternshipRoute);


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
