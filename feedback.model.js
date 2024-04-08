const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let New_feedback = new Schema({
    name:{type:String},
    email:{type:String},
    feedback:{type:String}
});

module.exports = mongoose.model("feedback", New_feedback);