const express = require('express');
const { loginAdmin, registerAdmin } = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // Helpful to create your initial admin
router.get('/get-admin', async (req, res) => {
    try {
        const admin = await Admin.findOne();
        if (!admin) {
            return res.status(404).json({ success: false, error: 'No admin found' });
        }
        res.status(200).json({ success: true, data: admin });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;