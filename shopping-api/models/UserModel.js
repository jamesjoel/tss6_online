var database = require("../config/database");

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("user").find(where).toArray(cb);
    })
}

module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("user").update(where, { $set : obj }, cb);
    })
}
module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("user").remove(where, cb);    })
}
module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("user").insertOne(obj, cb);
    })
}