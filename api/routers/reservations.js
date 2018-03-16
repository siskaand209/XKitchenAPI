const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Reservation = require('../models/reservation');

//Get All
router.get('/', (req, res, next) => {
    Reservation.find()
        .populate('table','code seat description')
        .populate('user','badgeId nick fullName')
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}); //end get

//Insert
router.post('/',(req,res,next) => {
    const newReservation = new Reservation({
        _id : new mongoose.Types.ObjectId,
        table : req.body.table,
        user : req.body.user,
        reference : req.body.reference,
        guest : req.body.guest,
       // createDate : req.body.createDate,
        //Time
    });

    newReservation.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        })
});

module.exports = router;