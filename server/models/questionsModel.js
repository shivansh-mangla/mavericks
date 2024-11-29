const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  profilePhoto: { type: String, required: false },
  body: { type: String, required: true },
  join_date: { type: Date, default: Date.now } // Default to the current date
});

// Create model for User
const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;