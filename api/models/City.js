const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    city_id: { type: String, required: true, unique: true },
    city_name: { type: String, required: true } // Will hold the 81 Cities of Türkiye
});

module.exports = mongoose.model('City', citySchema);