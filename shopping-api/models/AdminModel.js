var database = require("../config/database");

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("admin").find(where).toArray(cb);
    })
}

module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("admin").update(where, { $set : obj }, cb);
    })
}
module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("admin").remove(where, cb);
    })
}
module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("admin").insertOne(obj, cb);
    })
}