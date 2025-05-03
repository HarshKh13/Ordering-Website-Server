const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')

router.get('/users', async(req,resp) => {
    try{
        const users = await userModel.find();
        resp.send(200).json(users);
    }
    catch(error){
        resp.send(500).json({message: error.message})
    }
})