const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    code : {type : String, require : true},
    seat : {type : Number, require : true},
    description : {type : String, require : true},
});

module.exports = mongoose.model('Table', tableSchema, 'tables');