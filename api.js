const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

app.get('/api/data', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

module.exports.handler = serverless(app);
