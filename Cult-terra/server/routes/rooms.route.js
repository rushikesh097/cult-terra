const express = require("express");
const mongoose = require("mongoose");
const Rooms = require("../models/Rooms.js");

const router = express.Router();

router.get("/getall", (req, res) => {
  Rooms.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.put("/upadtestatus/:roomNo/:status", (req, res) => {
        Rooms.findOneAndUpdate(
          { roomNo: req.params.roomNo },
          { status: req.params.status }
        ).then((result) => {
            res.send(result)
        }).catch(err => console.log(err));
});

module.exports = router;
