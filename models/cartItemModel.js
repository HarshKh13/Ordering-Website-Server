const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    title:{type:String, alias:'Title'},
    sku:{type:String, alias:'Variant SKU'},
    price:{type:Number, alias:'Variant Price'},
    image_src:{type:String, alias:'Image Src'}
})

cartItemModel = mongoose.model('cart', cartItemSchema);
module.exports = cartItemModel;