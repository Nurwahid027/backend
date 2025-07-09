const express = require('express');
const router = express.Router();
const { createTransaction, getAllTransactions } = require('../controllers/transactionController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, getAllTransactions);
router.post('/', verifyToken, createTransaction);

module.exports = router;
