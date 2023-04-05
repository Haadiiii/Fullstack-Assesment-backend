const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.use(cors());

// Define Routes
app.use('/api/job', require('./routes/api/job'));
app.use('/api/hire', require('./routes/api/hire'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));