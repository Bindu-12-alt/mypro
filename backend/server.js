require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import Module Routes
const module1Routes = require('./routes/module1Routes');
const module2Routes = require('./routes/module2Routes');
const module3Routes = require('./routes/module3Routes');
const module4Routes = require('./routes/module4Routes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: [
    "https://mypro-two-delta.vercel.app",
    "https://mypro-git-main-bindu-12-alts-projects.vercel.app",
    "https://mypro-k0mnng60h-bindu-12-alts-projects.vercel.app"
  ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Module Routes
app.use('/api/module1', module1Routes); // User Request & Location
app.use('/api/module2', module2Routes); // Mechanic Allocation
app.use('/api/module3', module3Routes); // Service Tracking
app.use('/api/module4', module4Routes); // Payment & Admin

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'RoadRescue API is running' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
