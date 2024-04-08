const mongoose = require("mongoose");
const Schema=mongoose.Schema;

let Login_user= new Schema(
    {
        email:{type:String},
        password:{type:String}

    }
);
module.exports=mongoose.model("login",Login_user);