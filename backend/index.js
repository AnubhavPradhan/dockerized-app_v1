const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend!!!! This is a test.' });
});

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'TEST' }]);
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});