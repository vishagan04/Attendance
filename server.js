// server.js
const express = require('express');
const cors = require('cors');
const attendanceRoutes = require('./routes/attendanceRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/attendances', attendanceRoutes);
app.use('/employees', employeeRoutes);

// Define the port
const port = 3002;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
