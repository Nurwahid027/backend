const Transaction = require('../models/Transaction');
const Recipient = require('../models/Recipient');
const Program = require('../models/Program');
const { addBlock } = require('../blockchain/blockchain');

exports.createTransaction = async (req, res) => {
  const { recipientId, programId, amount } = req.body;

  try {
    const recipient = await Recipient.findById(recipientId);
    const program = await Program.findById(programId);
    if (!recipient || !program) {
      return res.status(404).json({ message: 'Penerima atau program tidak ditemukan' });
    }

    // Buat data blok
    const dataToHash = {
      recipient: recipient.name,
      program: program.title,
      amount,
      timestamp: new Date().toISOString()
    };

    const block = addBlock(dataToHash);

    const newTransaction = new Transaction({
      recipientId,
      programId,
      amount,
      verifiedBy: req.user.id,
      blockHash: block.hash,
      previousHash: block.previousHash
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('recipientId')
      .populate('programId')
      .populate('verifiedBy');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
