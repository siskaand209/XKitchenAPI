const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Table Model
const Category = require('../models/category');

router.get('/', (req,res, next) => {
    Category.find()
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
    const newCategory = new Category({
    _id : new mongoose.Types.ObjectId(),
    code: req.body.code,
    initial :req.body.initial,
    name : req.body.name
    });

    newCategory.save()
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
    Category.findById(id)
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
    Category.update({_id : id}, {$set: req.body})
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
    Category.remove({ _id : id})
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
