var FileModel = require("../models/FileModel");
var ShareModel = require("../models/ShareModel");
var UserModel = require("../models/UserModel");
var mongodb = require("mongodb");
var async = require("async");

exports.index = (req, res)=>{
    // console.log(req.params);
    var id = req.params.id;

    FileModel.find({ _id : mongodb.ObjectId(id)}, function(err, result){

        var pageData = { title : "Share", pagename : "share/index", result : result[0], message : req.flash("msg") };
        res.render("layout", pageData);
    })

}

exports.save = (req, res)=>{
    // console.log(req.params);
    // console.log(req.body);
    req.body.userid = req.session.userid;
    UserModel.find({ username : req.body.share_email }, function(err, result){
        if(result.length == 0)
        {
            req.flash("msg", "This Email id is not exists !");
            res.redirect("/share/"+req.params.id);
        }
        else
        {
            ShareModel.save(req.body, function(err, result){
                res.redirect("/dashboard");
            })
        }
    });
}

exports.share_with_me = (req, res)=>{
    ShareModel.find({share_email : req.session.email}, function(err, result){
        var arr=[];
        result.forEach(function(x){
            var fileid = x.file_id;
            var hows_share_id = x.userid;
            UserModel.find({ _id : mongodb.ObjectId(hows_share_id)}, function(err, result1){
                var obj = { name : result1[0].full_name, email : result1[0].username };
                FileModel.find({ _id : mongodb.ObjectId(fileid)}, function(err, result2){
                    obj.org_filename = result2[0].filename;
                    obj.type = result2[0].type;
                    obj.filename = result2[0].name;

                    // console.log(obj);
                    arr.push(obj);
                    
                    console.log("---------", arr);
                })
            })
            
        });

        console.log("****************** hello world");
        

        
        
        
        
        // var pagedata = { title : "Share With Me", pagename : "share/withme", result : result };
        // res.render("layout", pagedata);
    });




}