var UserModel = require("../models/UserModel");
var sha1 = require("sha1");

exports.index = (req, res)=>{
    var pageData = { title : "Login", pagename : "login/index", message : req.flash("msg")};
    res.render("layout", pageData);
}

exports.auth = (req, res)=>{
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;

    UserModel.find({ username : u }, function(err, result){
        //console.log(result.length);

        if(result.length == 1)
        {
            if(result[0].password == sha1(p))
            {
                req.session.userid = result[0]._id;
                req.session.name = result[0].full_name;
                req.session.is_user_logged_in = true;

                res.redirect("/");
            }
            else
            {
                req.flash("msg", "This Password is Incorrect !");
                res.redirect("/login");

            }
        }
        else
        {
            
            req.flash("msg", "This Username and Password is Incorrect !");
            res.redirect("/login");
        }
    });

}

/*

    signup
        username : gaurav@gmail.com
        password : 123  ----- 541224AFCED12548751

    login 
        username : gaurav@gmail.com
        password : 123  ------- 541224AFCED12548751






*/