const express = require('express');
const { getFlights, getFlightById, createFlight, updateFlight, deleteFlight } = require('../controllers/flightController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getFlights)
    .post(protect, createFlight);

router.route('/:id')
    .get(getFlightById)
    .put(protect, updateFlight)
    .delete(protect, deleteFlight);

module.exports = router;