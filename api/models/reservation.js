// tahap 1
 const express = require('express');
 const router = express.Router();
const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    table : {type: mongoose.Schema.Types.ObjectId, ref: 'Table', require: true},
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    reference : {type : String, require: true},
    guest : {type : String, require: true},
   // createDate : {type : Date, require:true},
   // createTime : {type : }
});

module.exports = mongoose.model('Reservation'/*ini dari const router*/, reservationSchema, 'reservations');