var ProductModel = require("../models/ProductModel");
exports.getAll = (req, res)=>{
    ProductModel.find({}, function(err, result){
        res.send(result);
    })
}