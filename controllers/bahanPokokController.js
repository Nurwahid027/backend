// controllers/bahanPokokController.js
const BahanPokok = require('../models/BahanPokok');

exports.getAllBahanPokok = async (req, res) => {
  try {
    const bahan = await BahanPokok.find();
    res.json(bahan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBahanPokok = async (req, res) => {
  const { nama, kategori, stok, satuan, harga } = req.body;
  try {
    const newBahan = new BahanPokok({ nama, kategori, stok, satuan, harga });
    await newBahan.save();
    res.status(201).json(newBahan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBahanPokokStok = async (req, res) => {
  const { id } = req.params;
  const { jumlahTambahan } = req.body; // Ini bisa positif (tambah) atau negatif (kurang)
  try {
    const bahan = await BahanPokok.findById(id);
    if (!bahan) {
      return res.status(404).json({ message: 'Bahan pokok tidak ditemukan' });
    }
    bahan.stok += jumlahTambahan;
    await bahan.save();
    res.json(bahan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};