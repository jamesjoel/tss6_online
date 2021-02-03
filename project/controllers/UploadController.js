var path = require("path");
var rand = require("randomstring");
var FileModel = require("../models/FileModel");
// var mongodb = require("mongodb");

exports.index = (req, res)=>{
    // console.log(req.params);
    var type = req.params.type;
    var id = req.session.userid;
    FileModel.find({ userid : id, type : type }, function(err, result){
        
        var pageData = { title : "Upload", pagename : "upload/index", type : type, message : req.flash("msg"), result : result};
        res.render("layout", pageData);
    });
}
// SELECT * FROM file WHERE userid = "123abc" AND type = "image"




/*
    1. change the file
    2. check ext
    3. upload file in the folder
    4. insert file name into db

*/
exports.do_upload=(req, res)=>{
    // console.log(req.files.file);
    var type = req.params.type;
    var name = req.files.file.name;
    var size = req.files.file.size;
    var mv = req.files.file.mv;

    var arr = name.split("."); // hello.10.doc   --- ["hello", "10", "doc"]
    var ext = arr[arr.length-1];
    var newname = rand.generate(20)+"."+ext; // Acef1245421Dfgdf.doc
    var filepath = path.resolve()+"/files/"+type+"/"+newname;


    req.body.filename = newname;
    req.body.userid = req.session.userid;
    req.body.type = type;

    
    switch(type){  // images
        case "doc" : if(ext == "doc" || ext =="docx")
                    {
                        mv(filepath, function(err){
                            if(err){
                                console.log("file upload err", err);
                                return;
                            }
                            FileModel.save(req.body, function(err, result){
                                res.redirect("/dashboard");
                            });
                        })
                    }
                    else
                    {
                        req.flash("msg", "This file type not allowed");
                        res.redirect("/upload/"+type);
                    }
                    break;

        case "ppt" : if(ext == "ppt")
                        {
                            mv(filepath, function(err){
                                if(err){
                                    console.log("file upload err", err);
                                    return;
                                }
                                FileModel.save(req.body, function(err, result){
                                    res.redirect("/dashboard");
                                });
                            })
                        }
                        else
                        {
                            req.flash("msg", "This file type not allowed");
                            res.redirect("/upload/"+type);
                        }
                        break;

        case "images" : if(ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png")
                        {
                            mv(filepath, function(err){
                                if(err){
                                    console.log("file upload err", err);
                                    return;
                                }
                                FileModel.save(req.body, function(err, result){
                                    res.redirect("/dashboard");
                                });
                            })
                        }
                        else
                        {
                            req.flash("msg", "This file type not allowed");
                            res.redirect("/upload/"+type);
                        }
                        break;

        case "xls"  : if(ext == "xls" || ext=="xlsx" || ext == "csv")
                        {
                            mv(filepath, function(err){
                                if(err){
                                    console.log("file upload err", err);
                                    return;
                                }
                                FileModel.save(req.body, function(err, result){
                                    res.redirect("/dashboard");
                                });
                            })
                        }
                        else
                        {
                            req.flash("msg", "This file type not allowed");
                            res.redirect("/upload/"+type);
                        }
                        break;

        case "pdf"  : if(ext == "pdf")
                    {
                        mv(filepath, function(err){
                            if(err){
                                console.log("file upload err", err);
                                return;
                            }
                            FileModel.save(req.body, function(err, result){
                                res.redirect("/dashboard");
                            });
                        })
                    }
                    else
                    {
                        req.flash("msg", "This file type not allowed");
                        res.redirect("/upload/"+type);
                    }
                    break;

        case "other" : 
                        mv(filepath, function(err){
                        if(err){
                            console.log("file upload err", err);
                            return;
                        }
                        FileModel.save(req.body, function(err, result){
                            res.redirect("/dashboard");
                        });
                    })
        
                    break;
    }
    


    

    


}

/*
    req.body
    req.params
    req.files
    req.session


    req.file = {
        nameattr : {
            name : "",
            data : "",
            size : "",
            encoding : "",
            tmpFilePah : "",
            mimetype : "",
            md5 : "",
            mv : function(uploding path, function(err){

            })
        }
    }


*/