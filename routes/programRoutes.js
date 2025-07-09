const express = require('express');
const router = express.Router();
const { getAllPrograms, createProgram } = require('../controllers/programController');
const { verifyToken } = require('../middleware/auth');

// Hanya bisa diakses jika login
router.get('/', verifyToken, getAllPrograms);
router.post('/', verifyToken, createProgram);

module.exports = router;
