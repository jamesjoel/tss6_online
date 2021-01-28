var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


module.exports = function(cb){
    MongoClient.connect(url, cb);
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