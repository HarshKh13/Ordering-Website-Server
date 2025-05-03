const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
    handle:{type:String, alias:'Handle'},
    title:{type:String, alias:'Title'},
    body:{type:String, alias:'Body'},
    vendor:{type:String, alias:'Vendor'},
    type:{type:String, alias:'Type'},
    tags:{type:String, alias:'Tags'},
    option1_name:{type:String, alias:'Option1 Name'},
    option1_value:{type:String, alias:'Option1 Value'},
    option2_name:{type:String, alias:'Option2 Name'},
    option2_value:{type:String, alias:'Option2 Value'},
    option3_name:{type:String, alias:'Option3 Name'},
    option3_value:{type:String, alias:'Option3 Value'},
    sku:{type:String, alias:'Variant SKU'},
    grams:{type:Number, alias:'Variant Grams'},
    inventory_tracker:{type:String, alias:'Variant Inventory Tracker'},
    inventory_quantity:{type:Number, alias:'Variant Inventory Qty'},
    inventory_policy:{type:String, alias:'Variant Inventory Policy'},
    fulfilment_service:{type:String, alias:'Variant Fulfillment Service'},
    price:{type:Number, alias:'Variant Price'},
    compare_at_price:{type:String, alias:'Variant Compare At Price'},
    image_src:{type:String, alias:'Image Src'},
})

const itemModel = model('items', itemSchema);

module.exports = itemModel;