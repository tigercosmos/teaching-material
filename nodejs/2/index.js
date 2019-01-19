'use strict';
// ===== HTTP  =====
const fs = require('fs');
const http = require('http');

const express = require('express');
const app = express();

// ===== Require Packages ======
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// ===== Middleware =====
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// ===== API =====
app.get('/api1', (req, res) => {
  const a1 = req.query.a1;
  const b1 = req.query.b1;
  console.log(req.query);
  res.json({a1, b1});
});

app.post('/api2', (req, res) => {
  const a1 = req.body.a1;
  const b1 = req.body.b1;
  console.log(req.body);
  res.json({a1, b1});
});


// ===== Front End =====
app.use('/', express.static(path.join(__dirname, './')));
// Send all other requests to root
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// =====  Port =====
const httpServer = http.createServer(app);

httpServer.listen(8880);
console.log("running on http://127.0.0.1:8880");
