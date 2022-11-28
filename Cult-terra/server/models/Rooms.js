const mongoose = require("mongoose");
const { Schema } = mongoose;

const Room = new Schema({
    roomNo: {
        type: Number,
        required: true,
    },
    floorNo: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("rooms", Room);
