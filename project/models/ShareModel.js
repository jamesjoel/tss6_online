var database = require("../config/database");


module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("share").insertOne(obj, cb);
    });
}

module.exports.delete=function(where, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("share").remove(where, cb);
        
        
    });
}
module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("share").update(where, { $set : obj }, cb);
    });
}
module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss6");
        db.collection("share").find(where).toArray(cb);
    });
}


/*



Insert -- 
    MongoClient.connect(url, function(err, con){
        var db = con.db("");
        db.collection("").insertone(obj, function(err, result){

        })
    })

Update -- 
    MongoClient.connect(url, function(err, con){
        var db = con.db("");
        db.collection("").update({ age : 25 }, { $set : { salary : 5000 }}, function(err, result){
            
        })
    })

Delete -- 
    MongoClient.connect(url, function(err, con){
        var db = con.db("");
        db.collection("").remove({ age : 25 }, function(err, result){
            
        })
    })


Find -- 

MongoClient.connect(url, function(err, con){
        var db = con.db("");
        db.collection("").find({}).toArray(function(err, result){
            
        })
    })

*/










/*
    var a = require("..");
    a.x({})
*/



