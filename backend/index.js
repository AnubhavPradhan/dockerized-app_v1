const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend!!!! This is a test.' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});