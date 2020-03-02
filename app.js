const express = require('express');

const app = express();

// Body Parser
app.use(express.json({ extended: false }));

app.use(express.static('public'))

module.exports = app;