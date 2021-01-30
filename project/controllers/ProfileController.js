var UserModel = require("../models/UserModel");
var mongodb = require("mongodb");
exports.index = (req, res)=>{
    // console.log(req.session);
    var id = req.session.userid;
    UserModel.find({ _id : mongodb.ObjectId(id) }, function(err, result){
        // console.log(result);
        var pagedata = { title : "Profile", pagename : "profile/index", result : result[0] };
        res.render("layout", pagedata);
    });

}