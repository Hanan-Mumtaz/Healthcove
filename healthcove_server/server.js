const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const passport = require("passport");
require("./config/passport"); // Load the Passport configuration

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

app.use(passport.initialize());

app.use('/api/users', userRoutes);  // ✅ Correct route for user-related actions
app.use('/api/auth', authRoutes);   // ✅ Correct route for authentication


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});