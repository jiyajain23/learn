const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dataRouter = require('./routes/data');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/company')
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.error('Connection error:', err));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', dataRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});