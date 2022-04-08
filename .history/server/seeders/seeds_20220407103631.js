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

const seedCategories = [
    {
        name: 'Desktop Computers',
        description: 'All-in-one desktop computers. Includes monitor, keyboard, mouse and speakers.'
    },
    {
        name: 'Laptops',
        description: 'Portable computers for on-the-go work or play.'
    },
    {
        name: 'Tablets',
        description: 'Touch-sensitive screens for browsing or drawing.'
    },
    {
        name: 'Accessories',
        description: 'Gear and parts to enhance your experience.'
    }
]

const seedProducts = [
    {
        name: 'Acer Aspire C24-1651-UR15 AIO Desktop',
        image: 'https://m.media-amazon.com/images/I/71QfqMtNISL._AC_SL1500_.jpg',
        description: 'Breaking the boundaries of performance with the Intel Core i3-1115G4 Processor - up to 4.20 GHz, 4 cores, 8 threads, 8 MB Intel Smart Cache | Intel UHD Graphics',
        price: 649.99,
        category: 'Desktop Computers'

    },
    {
        name: 'Acer Swift X SFX14-41G-R1S6 Creator Laptop',
        image: 'https://m.media-amazon.com/images/I/71d5rAq4YaL._AC_SL1500_.jpg',
        description: 'Ultimate Performance. Uncompromised Battery Life: Speed up tasks with AMD Ryzen 7 5800U processor with Zen 3 Core Architecture, available for ultrathin laptops, so you can save time and get back to creating',
        price: 924.99,
        category: 'Laptops'
    },
    {
        name: 'Samsung Galaxy Tab A8 Android Tablet',
        image: 'https://m.media-amazon.com/images/I/61fV4UeHeLL._AC_SL1200_.jpg',
        description: 'A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends, the Galaxy Tab A8 tablet brings out the best in every moment on a 10.5" LCD screen',
        price: 179.99,
        category: 'Tablets'
    },
    {
        name: 'Corsair HS35 Stereo Gaming Headset',
        image: 'https://m.media-amazon.com/images/I/71HsDyNw+qL._AC_SL1500_.jpg',
        description: 'Multi-platform compatible with PC, Xbox one, PS4, Nintendo Switch and mobile devices',
        price: 39.99,
        category: 'Accessories'
    }
];

