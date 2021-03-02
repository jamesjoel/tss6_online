var CategoryModel = require("../models/CategoryModel");
exports.getAll = (req, res)=>{
    CategoryModel.find({}, function(err, result){
        res.send(result);
    })
}