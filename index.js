// index.js
const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();


// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', itemRoutes);

// Define a simple route
app.get('/', (req, res) => res.send('API is running...'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
