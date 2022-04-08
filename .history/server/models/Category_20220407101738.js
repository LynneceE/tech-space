const { Schema } = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Category = model('Category', categorySchema);

module.exports = Category;