var FileModel = require("../models/FileModel");
var mongodb = require("mongodb");
exports.index = (req, res)=>{
    // console.log(req.params);
    var id = req.params.id;

    FileModel.find({ _id : mongodb.ObjectId(id)}, function(err, result){

        var pageData = { title : "Share", pagename : "share/index", result : result[0] };
        res.render("layout", pageData);
    })

}