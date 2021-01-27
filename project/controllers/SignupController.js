
var sha1 = require("sha1");

var UserModel = require("../models/UserModel");


exports.index = (req, res)=>{
    var pageData = { title : "Signup", pagename : "signup/index"};
    res.render("layout", pageData);
}

exports.save = (req, res)=>{
    // console.log(req.body);

    req.body.password = sha1(req.body.password);
    UserModel.save(req.body);
    res.redirect("/");

    // MongoClient.connect(url, (err, con)=>{
    //     if(err){
    //         console.log('connection error', err);
    //         return;
    //     }
    //     var db = con.db("tss6");
    //     db.collection("user").insertOne(req.body);
    //     res.redirect("/");
    // });
}