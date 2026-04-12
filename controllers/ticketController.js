const crypto = require('crypto');
const Ticket = require('../models/Ticket');
const Flight = require('../models/Flight');

// @desc    Book a new ticket
// @route   POST /api/tickets
// @access  Public
exports.bookTicket = async (req, res, next) => {
    try {
        const { passenger_name, passenger_surname, passenger_email, flight_id } = req.body;

        // Ensure the flight exists and has available seats atomically
        const flight = await Flight.findOneAndUpdate(
            { _id: flight_id, seats_available: { $gt: 0 } },
            { $inc: { seats_available: -1 } },
            { new: true }
        );

        if (!flight) {
            return res.status(400).json({ success: false, error: 'Flight not found or no seats available' });
        }

        // Generate a random 6-character ticket ID
        const ticket_id = crypto.randomBytes(3).toString('hex').toUpperCase();

        const ticket = await Ticket.create({
            ticket_id,
            passenger_name,
            passenger_surname,
            passenger_email,
            flight_id
        });

        res.status(201).json({ success: true, data: ticket });
    } catch (error) {
        next(error);
    }
};

// @desc    Get tickets by user email
// @route   GET /api/tickets/user/:email
// @access  Public
exports.getUserTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find({ passenger_email: req.params.email })
            .populate({
                path: 'flight_id',
                populate: {
                    path: 'from_city to_city'
                }
            });

        res.status(200).json({ success: true, data: tickets });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all tickets (Admin only)
// @route   GET /api/tickets
// @access  Private
exports.getAllTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find()
            .populate({
                path: 'flight_id',
                populate: {
                    path: 'from_city to_city'
                }
            });

        res.status(200).json({ success: true, data: tickets });
    } catch (error) {
        next(error);
    }
};
