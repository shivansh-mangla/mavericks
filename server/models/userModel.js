const mongoose = require('mongoose');

// Define schema for User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePhoto: { type: String, required: false },
  age: { type: Number, required: false }, 
  school: { type: String, required: false },
  join_date: { type: Date, default: Date.now } // Default to the current date
});

// Create model for User
const User = mongoose.model('User', userSchema);  // Automatically creates a collection by the name 'user'

module.exports = User;