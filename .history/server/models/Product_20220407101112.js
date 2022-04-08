const { Schema } = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const productSchema = new Schema(
    {
        product_id: {
            type: INTEGER,
            auto: true
        },
        product_name: {
            type: String,
            required: true
        },
        description: {
            
        }
    }
)