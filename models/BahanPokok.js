// models/BahanPokok.js
const mongoose = require('mongoose');

const bahanPokokSchema = new mongoose.Schema({
  nama: { type: String, required: true, unique: true },
  kategori: { type: String, required: true },
  stok: { type: Number, default: 0 },
  satuan: { type: String, required: true },
  harga: { type: Number, default: 0 }
});

module.exports = mongoose.model('BahanPokok', bahanPokokSchema);