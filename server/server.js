// server.js (or app.js)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const connectDB = require('./utils/db');
const cors = require('cors')

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors({
    origin: 'https://event-management-app.vercel.app',
    credentials: true
}))

// Connect to MongoDB
connectDB()

// Use the authentication and event routes
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);


// // Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
