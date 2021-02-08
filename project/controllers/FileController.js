var FileModel = require("../models/FileModel");
var mongodb = require("mongodb");
var fs = require("fs");
var path = require("path");
exports.delete = (req, res)=>{  
    var type = req.params.type;
    FileModel.find({ _id : mongodb.ObjectId(req.params.id)}, function(err, result){
        // console.log(result);
        var filepath = path.resolve()+"/files/"+type+"/"+result[0].filename;
        fs.unlinkSync(filepath);
        FileModel.deleteone({ _id : mongodb.ObjectId(req.params.id)}, function(err, result){
                res.redirect("/upload/"+type);
        });
    });

}

exports.edit = (req, res)=>{
    FileModel.find({ _id : mongodb.ObjectId(req.params.id)}, function(err, result){
        var pagedata = { title : "Edit", pagename : "upload/edit", message : req.flash("msg"), result : result[0]};
        res.render("layout", pagedata);
    });
}
exports.update = (req, res)=>{
    // console.log(req.body);
    // console.log(req.params);
    FileModel.update({ _id : mongodb.ObjectId(req.params.id)}, req.body, function(err, result){
        res.redirect("/dashboard");
    });
}