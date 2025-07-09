// routes/bahanPokokRoutes.js
const express = require('express');
const router = express.Router();
const { getAllBahanPokok, createBahanPokok, updateBahanPokokStok } = require('../controllers/bahanPokokController');
const { verifyToken, isAdmin } = require('../middleware/auth'); // Asumsi ada middleware auth

router.get('/', verifyToken, getAllBahanPokok);
router.post('/', verifyToken, isAdmin, createBahanPokok); // Hanya admin yang bisa menambah jenis bahan baru
router.put('/:id/stok', verifyToken, updateBahanPokokStok); // Untuk memperbarui stok

module.exports = router;