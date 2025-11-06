require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://travel-catalog-frontend.onrender.com'
  ],
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running ✅' });
});

app.use('/api/auth', authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
