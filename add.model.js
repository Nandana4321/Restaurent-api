const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Add_item = new Schema({
    itemname:{type:String},
    price:{type:Number},
    description:{type:String}
});

module.exports = mongoose.model("add", Add_item);