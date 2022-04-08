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
        image: 'https://m.media-amazon.com/images/I/71QfqMtNISL._AC_SL1500_.jpg',
        description: 'Breaking the boundaries of performance with the Intel Core i3-1115G4 Processor - up to 4.20 GHz, 4 cores, 8 threads, 8 MB Intel Smart Cache | Intel UHD Graphics'

    }
]