// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Simple GET route
app.get('/', (req, res) => {
  res.send('Server is working!');
});

// Simple POST route
app.post('/test', (req, res) => {
  const data = req.body;
  res.json({
    message: 'POST request received!',
    receivedData: data
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});