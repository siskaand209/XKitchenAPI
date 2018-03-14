const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Table Model
const Table = require('../models/table');

router.get('/', (req,res, next) => {
    Table.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    const newTable = new Table({
    _id : new mongoose.Types.ObjectId(),
    code: req.body.code,
    seat :req.body.seat,
    description : req.body.description
    });

    newTable.save()
        .then(doc => {
            console.log(doc);
            res.status(201).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        })
});


//Get by (id)
router.get('/:id', (req,res, next) => {
    const id = req.params.id;
    Table.findById(id)
    .exec()
    .then(result  =>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

//Update 
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    
    Table.update({_id : id}, {$set: updateOps})
    .exec()
    .then( result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message : err
        })
    })
});


router.delete('/:id', (req,res, next) => {
    const id = req.params.id;
    Table.remove({ _id : id})
    .exec()
    .then( result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message : err
        })
    })
});

module.exports = router;