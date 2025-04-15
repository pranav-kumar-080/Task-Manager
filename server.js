const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const Task = require('./models/Task');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to TiDB Cloud database');
        // Only sync the database, don't add any test data
        return sequelize.sync({ force: false });
    })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
