const mongoose = require("mongoose");
const { Schema } = mongoose;

const Customer = new Schema({
    name: {
    type: String,
    required: true,
    },
    roomNo: {
    type: Number,
    required: true,
    },
    checkInDate: {
    type: String,
    default: new Date().toISOString().slice(0,10)
    },
    checkOutDate: {
    type: String,
    required: true,
    },
});

module.exports = mongoose.model("customers",Customer);