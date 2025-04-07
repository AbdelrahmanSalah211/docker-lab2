const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from NodeJS backend' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
