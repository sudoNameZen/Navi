import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// PostgreSQL pool connection
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT || 5432,
});

// Test database connection
pool.connect((err) => {
  if (err) {
    console.error('Database connection failed', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hospital Navigation API Running');
});

// Example endpoint: Get all hospitals
app.get('/api/hospitals', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM hospitals');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Example endpoint: Add a new hospital
// app.post('/api/hospitals', async (req, res) => {
//   const { name, address, coordinates } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO hospitals (name, address, coordinates) VALUES ($1, $2, $3) RETURNING *',
//       [name, address, coordinates]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
