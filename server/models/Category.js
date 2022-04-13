const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
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