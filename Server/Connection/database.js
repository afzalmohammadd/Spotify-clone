const mongoose = require('mongoose');
require("dotenv").config()

const uri = process.env.MONGO_URI

async function connectDB() {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }

  module.exports = connectDB;