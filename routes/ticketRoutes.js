const express = require('express');
const { bookTicket, getUserTickets, getAllTickets } = require('../controllers/ticketController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(bookTicket)
    .get(protect, getAllTickets); // Admin only gets to see all tickets

router.route('/user/:email')
    .get(getUserTickets); // Users can view their own tickets by email

module.exports = router;