var UserModel = require("../models/UserModel");
var sha1 = require("sha1");

exports.index = (req, res)=>{
    var pageData = { title : "Login", pagename : "login/index"};
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
                console.log("-------------");
            }
            else
            {
                console.log("xxxxxxxxxx");

            }
        }
        else
        {
            
            console.log("username is not correct ");
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