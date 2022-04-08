const { Schema } = require('mongoose');

const productSchema = new Schema(
    {
        product_id: {
            type: Int
        }
    }
)