const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order_item = new mongoose.Schema({
    items: [{
      title: String,
      quantity: Number,
      price: Number,
    }],
    total: Number,
    customerName: String,
    customerEmail: String,
  });
  
  

module.exports = mongoose.model("order", Order_item);