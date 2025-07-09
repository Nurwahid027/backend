const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  name: String,
  nik: { type: String, unique: true },
  address: String,
  statusVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('Recipient', recipientSchema);
