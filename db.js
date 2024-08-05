
// Import the pg module
const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  user: 'postgres',      // Replace with your PostgreSQL username
  host: 'localhost',         // Replace with your PostgreSQL server address
  database: 'Employee Details',  // Replace with your database name
  password: '123',  // Replace with your PostgreSQL password
  port: 5432,                // Default port for PostgreSQL
});


// Connect to the PostgreSQL server
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Connection error', err.stack);
  });

