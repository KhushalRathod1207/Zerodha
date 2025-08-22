const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mod: { type: String, enum: ["BUY", "SELL"], required: true }  // Buy / Sell
}, { timestamps: true });

module.exports = { OrdersSchema };
