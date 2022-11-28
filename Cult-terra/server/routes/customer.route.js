const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/Customer.js");
const router = express.Router();

router.post("/addcustomer", (req, res) => {
    Customer.create(req.body)
    .then((result) => {
        res.send(result)
    })
    .catch(err => console.log(err));
});

router.get("/getcustomer/:roomNo", (req,res) => {
    Customer.find({ roomNo: req.params.roomNo })
    .then((result) => {
    res.send(result);
    })
    .catch((err) => console.log(err));
})

module.exports = router;
