const mongoose = require('mongoose');

// Define schema for News

// Define the schema for a single dictionary
const DictionarySchema = new mongoose.Schema({
  img: { type: String, required: true },
  headline: { type: String, required: true },
  link: { type: String, required: true }
});

// Define the main schema with a list of dictionaries
const newsSchema = new mongoose.Schema({
  items: { type: [DictionarySchema], required: true }
});

// Create model for News
const News = mongoose.model('News', newsSchema);  // Automatically creates a collection by the name 'news'

module.exports = News;

