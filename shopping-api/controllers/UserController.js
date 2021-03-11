var jwt = require("jsonwebtoken");
exports.index = (req, res)=>{
    var token = req.headers.authorization;
    var info = jwt.verify(token, "the stepping stone");
    if(! info){
        console.log("XXXXXXXXXXXXXXXXXXXXX");
    }
    else{
        console.log("token is correct", info);
    }
}

/*

    var token = jwt.sign({ id : 5, name : "rohit" }, "the steping stone");

*/