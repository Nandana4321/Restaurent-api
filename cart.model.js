
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cart_item = new Schema({
    title:{type:String},
    price:{type:Number},
    quantity:{type:Number},
});

module.exports = mongoose.model("cart", Cart_item);
