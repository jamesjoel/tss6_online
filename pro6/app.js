var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var MongoClient = require("mongodb").MongoClient;





// conver html body data to json format


// Parser Class

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.get("/", (req, res)=>{
    res.render("form");
})
// Cannot post /save


app.post("/save", (req, res)=>{
    // console.log(req.body);

    MongoClient.connect("mongodb://localhost:27017", function(err, con){
        if(err){
            console.log("Connection Error ", err);
            return;
        }
        var db = con.db("tss6");
        // select or use database
        // db.student.insert({});
        db.collection("demo").insertOne(req.body);
        res.redirect("/");
    });

})


app.listen(3000, ()=>{
    console.log("server running");
})