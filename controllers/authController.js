const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Validate username and password
        if (!username || !password) {
            return res.status(400).json({ success: false, error: 'Please provide username and password' });
        }

        // Check for admin
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        // Create token
        const token = admin.getSignedJwtToken();

        res.status(200).json({
            success: true,
            token
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Register initial admin (helper route, consider disabling after use)
// @route   POST /api/auth/register
// @access  Public 
exports.registerAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.create({
            username,
            password
        });

        const token = admin.getSignedJwtToken();

        res.status(201).json({
            success: true,
            token
        });
    } catch (error) {
        next(error);
    }
};
