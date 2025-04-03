const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Agar API bisa diakses dari mana saja
app.use(express.json()); // Middleware untuk membaca JSON

// Endpoint utama
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

// Endpoint untuk mendapatkan data
app.get('/api/data', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

// Jalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
