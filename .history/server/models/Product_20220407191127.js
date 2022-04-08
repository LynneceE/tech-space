const { Schema } = require('mongoose');
const { INTEGER } = require('sequelize/dist');
const { Category } = require('./Category');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: URL,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: [categorySchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Product = model('Product', productSchema);

module.exports = Product;