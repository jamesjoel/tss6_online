var database = require("../config/database");


module.exports.save = function(obj){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("user").insertone(obj);
    });
}

module.exports.delete=function(){

}
module.exports.update = function(){

}
module.exports.find = function(){
    
}











module.exports.x = function(obj){

};


/*
    var a = require("..");
    a.x({})
*/



