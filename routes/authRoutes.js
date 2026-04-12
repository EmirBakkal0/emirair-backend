const express = require('express');
const { loginAdmin, registerAdmin } = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // Helpful to create your initial admin

module.exports = router;