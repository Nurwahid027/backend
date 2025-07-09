const Program = require('../models/Program');

// Ambil semua program bantuan
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tambah program bantuan baru
exports.createProgram = async (req, res) => {
  const { title, description, amount, startDate, endDate, status } = req.body; // Tambahkan status
  try {
    const newProgram = new Program({ title, description, amount, startDate, endDate, status });
    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fungsi baru: Perbarui program bantuan berdasarkan ID
exports.updateProgram = async (req, res) => {
  const { id } = req.params; // Ambil ID dari URL parameter
  const updates = req.body; // Ambil data update dari body request

  try {
    // Temukan program berdasarkan ID dan perbarui
    // Gunakan { new: true } untuk mengembalikan dokumen yang sudah diperbarui
    // Gunakan { runValidators: true } untuk menjalankan validasi skema Mongoose saat update
    const updatedProgram = await Program.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedProgram) {
      return res.status(404).json({ message: 'Program tidak ditemukan' });
    }

    res.json(updatedProgram); // Kirim kembali program yang sudah diperbarui
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fungsi baru: Hapus program bantuan berdasarkan ID (opsional, jika diperlukan)
exports.deleteProgram = async (req, res) => {
  const { id } = req.params; // Ambil ID dari URL parameter

  try {
    const deletedProgram = await Program.findByIdAndDelete(id);

    if (!deletedProgram) {
      return res.status(404).json({ message: 'Program tidak ditemukan' });
    }

    res.json({ message: 'Program berhasil dihapus', deletedProgram });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
