const express = require('express');
const path = require('path');

const app = express();

// Body Parser
app.use(express.json({ extended: false }));

// Set static folder
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;