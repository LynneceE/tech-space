const { Schema } = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const categSchema = new Schema(
    {
        name: {
            type: String,
            required: true
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