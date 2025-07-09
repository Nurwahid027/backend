const express = require('express');
const router = express.Router();
const { getAllRecipients, createRecipient } = require('../controllers/recipientController');
const { verifyToken } = require('../middleware/auth');

// Semua butuh login
router.get('/', verifyToken, getAllRecipients);
router.post('/', verifyToken, createRecipient);

module.exports = router;
