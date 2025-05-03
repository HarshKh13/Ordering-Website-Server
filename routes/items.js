const express = require('express');
const router = express.Router();
const itemModel = require('../models/itemsModel');


router.get('/items', async (req,resp) => {
    try{
        const items = await itemModel.find();
        resp.status(200).json(items);
    }
    catch(error){
        resp.status(500).json({message: error.message});
    }
})

module.exports = router;
