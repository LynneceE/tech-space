const { Schema } = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const productSchema = new Schema(
    {
        product_id: {
            type: INTEGER,
            auto: true
        },
        name: {
            type: String,
            required: true
        },
        image
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