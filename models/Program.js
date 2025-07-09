const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: String,
  description: String,
  amount: Number,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['aktif', 'selesai'], default: 'aktif' }
});

module.exports = mongoose.model('Program', programSchema);
