const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    category : {type: mongoose.Schema.Types.ObjectId, ref: 'Category', require: true},
    code : {type : String, require: true },
    initial : { type : String, require : true},
    name : { type : String, require : true},
    description : {type : String, require : true},
    price: { type: Number, default : 1}
});

module.exports = mongoose.model('Product', productSchema, 'products');