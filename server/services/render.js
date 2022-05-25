const axios = require('axios');

exports.homeRoutes = (req, res) => {
    //Make a GET request to the api
    var warehouseList = null
    var itemList = null
    axios.get("http://localhost:3000/api/warehouse")
    .then(function(response){
        console.log(response.data)
        
        warehouseList = response.data

        if (itemList != null && warehouseList != null) {
            res.render('index', { 
                items: itemList,
                warehouse: warehouseList
            });
        }
    })
    .catch(err => {
        res.send(err);
    })

    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)

        itemList = response.data
        
        if (itemList != null && warehouseList != null) {
            res.render('index', { 
                items: itemList,
                warehouse: warehouseList
            });
        }
    })
    .catch(err => {
        res.send(err);
    })

    
}

exports.add_user = (req, res) => {
    axios.get("http://localhost:3000/api/warehouse")
    .then(function(response){
        console.log(response.data)

        
        res.render('add_user', { 
                warehouse: response.data
        });
        
    })
    .catch(err => {
        res.send(err);
    })
}

exports.add_warehouse = (req, res) => {
    res.render('add_warehouse');
}

exports.update_user = (req, res) => {
    var warehouseList = null;
    var itemData = null;
    axios.get("http://localhost:3000/api/warehouse")
    .then(function(response){
        console.log(response.data)
        warehouseList = response.data

        if (warehouseList != null && itemData != null) {
            res.render('update_user', { 
                warehouse: warehouseList,
                item: itemData
        });
        }       
    })
    .catch(err => {
        res.send(err);
    })
    
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
        .then(function(itemdata) {
            itemData = itemdata.data;
            
            if (warehouseList != null && itemData != null) {
                res.render("update_user", {
                    item : itemdata.data,
                    warehouse: warehouseList
                })
            }
        })
        .catch(err => {
            res.send(err);
        })
}