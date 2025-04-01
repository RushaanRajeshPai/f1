const express = require('express');
const cors = require('cors');
const path = require('path');
const f1StandingsRouter = require('./routes/f1standings');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', f1StandingsRouter);

// Basic route
app.get('/', (req, res) => {
  res.send('F1 Standings API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});