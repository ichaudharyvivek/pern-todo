const express = require('express');
const dotenv = require('dotenv');

// App initializations
const app = express();
app.use(express.json());
dotenv.config();

// App constants
const PORT = process.env.PORT || 3000;

// Home URL
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Running successfully',
  });
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
