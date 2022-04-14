const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        quantity: {
            type: Number,
            min: 0,
            default: 0
          },
        category: {
            type: String,
            ref: 'Category',
            required: true
        },

    }
);

const Product = model('Product', productSchema);

module.exports = Product;