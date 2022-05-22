const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    }
})

const Userdb = mongoose.model('inventoryDB', schema);

module.exports = Userdb;