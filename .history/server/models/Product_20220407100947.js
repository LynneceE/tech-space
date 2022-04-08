const { Schema } = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const productSchema = new Schema(
    {
        product_id: {
            type: INTEGER,
            auto
        }
    }
)