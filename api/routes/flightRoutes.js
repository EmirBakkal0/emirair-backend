const express = require('express');
const { 
    getFlights, 
    getFlightById, 
    createFlight, 
    updateFlight, 
    deleteFlight,
    getActiveFlights,
    getOldFlights
} = require('../controllers/flightController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getFlights)
    .post(protect, createFlight);

router.route('/active')
    .get(getActiveFlights);

router.route('/old')
    .get(getOldFlights);

router.route('/:id')
    .get(getFlightById)
    .put(protect, updateFlight)
    .delete(protect, deleteFlight);

module.exports = router;