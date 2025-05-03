const express = require('express');
const router = express.Router();
const cartItemModel = require('../models/cartItemModel')

router.get('/cartItems', async (req,resp) => {
    try{
        const cartItems = await cartItemModel.find();
        resp.status(200).json(cartItems);
    }
    catch(error){
        resp.status(500).json({message: error.message});
    }
})

router.post('/cartItems', async (req,resp) => {
    try {
        const {id, title, sku, price, image_src} = req.body;
        const newCartItem = new cartItemModel({title, sku, price, image_src});
        await newCartItem.save();
        resp.status(200).json({message: 'Cart Item added successfully'});
    }
    catch(error) {
        resp.status(500).json({message: error.message});
    }
})

router.delete('/cartItems', async (req,resp) => {
    try {
        const {id} = req.body;
        await cartItemModel.deleteOne({_id: id})
        resp.status(200).json({'message': 'Cart Item deleted successfully'});
    }
    catch(error){
        resp.status(500).json({message: error.message});
    }
})

module.exports = router;