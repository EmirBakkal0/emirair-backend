const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config(); // load them env

connectDB(); // connect to the database

const app = express();

app.use(cors()); // enable CORS
app.use(express.json()); // parse JSON request bodies

const authRoutes = require('./routes/authRoutes');
const flightRoutes = require('./routes/flightRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const cityRoutes = require('./routes/cityRoutes');

app.use('/api/auth', authRoutes); // use the auth routes
app.use('/api/flights', flightRoutes); // use the flight routes
app.use('/api/tickets', ticketRoutes); // use the ticket routes
app.use('/api/cities', cityRoutes); // use the city routes

// Basic error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));