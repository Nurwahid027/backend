const Recipient = require('../models/Recipient');

// Ambil semua data penerima
exports.getAllRecipients = async (req, res) => {
  try {
    const recipients = await Recipient.find();
    res.json(recipients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tambah penerima baru
exports.createRecipient = async (req, res) => {
  const { name, nik, address } = req.body;
  try {
    const newRecipient = new Recipient({ name, nik, address });
    await newRecipient.save();
    res.status(201).json(newRecipient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
