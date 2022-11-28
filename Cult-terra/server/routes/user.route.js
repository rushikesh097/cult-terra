const express = require("express")
const mongoose = require("mongoose")
const bcyrpt = require("bcryptjs")
const Users = require("../models/User.js")

const router = express.Router()
const salt = "$2a$10$llw0G6IyibUob8h5XRt9xuRczaGdCm/AiV6SSjf5v78XS824EGbh"

router.post("/adduser", async (req,res) =>{

    try {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = bcyrpt.hashSync(req.body.password,salt);
    
    const user = new Users({name:name,email:email,password:password})
    const newUser = await user.save();
    res.status(201).json(newUser);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


router.post('/validateuser',async (req,res) =>{
    const email= req.body.email;
    const password = req.body.password;
    try {
        let user = await Users.findOne({email:email});
        if(!user)
        {
            return res.status(400).json({message:"Email or password is invalid!"})
        }

        const isMatch = await bcyrpt.compare(password,user.password)
        if(!isMatch)
        {
            return res.status(400).json({message:"Email or password is invalid!"})
        }
        res.json(user)
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router