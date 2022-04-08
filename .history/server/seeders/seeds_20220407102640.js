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
  .catch((err) => {
      console.log(err);
  });

const seedProducts = [
    {
        name: 'Acer Aspire C24-1651-UR15 AIO Desktop',
        image: https://m.media-amazon.com/images/I/71QfqMtNISL._AC_SL1500_.jpg
    }
]