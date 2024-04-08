const mongoose = require("mongoose");
const Schema=mongoose.Schema;

let New_user= new Schema(
    {
        email:{type:String},
        password:{type:String}

    }
);
module.exports=mongoose.model("Signup",New_user);