const City = require('../models/City');

// @desc    Get all cities
// @route   GET /api/cities
// @access  Public
exports.getCities = async (req, res, next) => {
    try {
        const cities = await City.find().sort({ city_name: 1 });
        res.status(200).json({ success: true, data: cities });
    } catch (error) {
        next(error);
    }
};
