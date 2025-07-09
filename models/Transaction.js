const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipient' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  amount: Number,
  timestamp: { type: Date, default: Date.now },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  blockHash: String,
  previousHash: String
});

module.exports = mongoose.model('Transaction', transactionSchema);
