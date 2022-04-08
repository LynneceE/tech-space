const mongoose = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:3001/',
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
  )
  .then(() => {
      console.log('Connected to MongoDB...');
  })
  