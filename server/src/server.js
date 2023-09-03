require('dotenv').config();
const express = require('express');
const cors = require('cors');

const pool = require('./config/db');

// App initializations
const app = express();
app.use(express.json());
app.use(cors());

// App constants
const PORT = process.env.PORT || 3000;

// Home URL
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Running successfully',
  });
});

// ============================
// ROUTES
// =============================

// CREATE TODO
app.post('/todo', async (req, res) => {
  try {
    const { description } = req.body;

    // Insert into database
    const newTodo = await pool.query(
      'INSERT INTO todo_lists(description) VALUES($1)',
      [description]
    );

    res.status(200).json({ success: true, data: newTodo });
  } catch (err) {
    console.log(err);
  }
});

// Listen to PORT
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejection - [For eg. mongodb password is wrong]
process.on('unhandledRejection', (err) => {
  console.log('Something went wrong!');
  server.close(() => process.exit(1));
});
