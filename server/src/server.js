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
      'INSERT INTO todo_lists(description) VALUES($1) RETURNING *',
      [description]
    );

    res.status(200).json({ success: true, data: newTodo.rows });
  } catch (err) {
    console.log(err);
  }
});

// GET ALL TODOS
app.get('/todo', async (req, res) => {
  try {
    // Get all todos from the database
    const allTodos = await pool.query('SELECT * FROM todo_lists');

    res
      .status(200)
      .json({ success: true, count: allTodos.rowCount, data: allTodos.rows });
  } catch (err) {
    console.log(err);
  }
});

// GET TODO WITH ID
app.get('/todo/:todo_id', async (req, res) => {
  try {
    const { todo_id } = req.params;

    // Get todo with id from the database
    const getTodoWithID = await pool.query(
      'SELECT * FROM todo_lists WHERE todo_id=$1',
      [todo_id]
    );

    res.status(200).json({
      success: true,
      count: getTodoWithID.rowCount,
      data: getTodoWithID.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE TODO WITH ID
app.put('/todo', async (req, res) => {
  try {
    const { todo_id, description } = req.body;

    // Update todo with id in the database
    const updatedTodo = await pool.query(
      'UPDATE todo_lists SET description=$1 WHERE todo_id=$2 RETURNING *',
      [description, todo_id]
    );

    res.status(200).json({
      success: true,
      count: updatedTodo.rowCount,
      data: updatedTodo.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

// DELETE TODO WITH ID
app.delete('/todo/:todo_id', async (req, res) => {
  try {
    const { todo_id } = req.params;

    // Delete todo with id in the database
    const deletedTodo = await pool.query(
      'DELETE FROM todo_lists WHERE todo_id=$1 RETURNING *',
      [todo_id]
    );

    res.status(200).json({
      success: true,
      count: deletedTodo.rowCount,
    });
  } catch (err) {
    console.log(err);
  }
});

// Listen to PORT
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
