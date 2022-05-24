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
    warehouse:{
        type:String
    },
    stock:{
        type:String,
        required:true
    }
})

const Userdb = mongoose.model('inventoryDB', schema);

var schema2 = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    location:{
        type:String,
        required:true,
    }
})

const Warehousedb = mongoose.model('warehouseDB', schema2);

module.exports = {
    Userdb: Userdb,
    Warehousedb: Warehousedb
}
