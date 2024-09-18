const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,  // Corrected: String, not "string"
            required: [true, "please enter some data"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,  // Corrected: String, not "string"
            required: false,
        },
    },
    {
        timestamps: true  // Corrected: timestamps (lowercase)
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
