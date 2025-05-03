const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
})

const userModel = mongoose.Model('user', userSchema);
module.exports = userModel;