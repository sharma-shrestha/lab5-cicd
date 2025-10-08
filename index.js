// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
