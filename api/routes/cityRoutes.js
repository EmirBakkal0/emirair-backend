const express = require('express');
const { getCities } = require('../controllers/cityController');

const router = express.Router();

router.route('/').get(getCities);

module.exports = router;
