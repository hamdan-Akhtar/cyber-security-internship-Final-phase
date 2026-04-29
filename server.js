require('dotenv').config();

const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(express.json());

// Security headers
app.use(helmet());

// CORS protection
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Rate limiting for login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: 'Bahut zyada login attempts! 15 minutes baad try karo.'
  }
});

// API key check
function checkApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({
      message: 'Galat ya missing API key!'
    });
  }
}

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Secure API chal rahi hai!'
  });
});

// Login route
app.post('/api/login', loginLimiter, (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.json({
      message: 'Login successful!'
    });
  } else {
    res.status(401).json({
      message: 'Wrong username or password!'
    });
  }
});

// Protected route
app.get('/api/secret', checkApiKey, (req, res) => {
  res.json({
    message: 'Yeh secret data hai. API key sahi thi.'
  });
});

// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});