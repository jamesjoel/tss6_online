var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var upload = require("express-fileupload");
var cors = require("cors");


app.use(cors());

app.use(express.static(__dirname+"/assets"));
// <img src="http://localhost:3000/images/1.jpg"

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(upload());

app.post("/api/add", (req, res)=>{
    console.log(JSON.parse(req.body.formdata));
    console.log(req.files);
})


app.post("/api/upload", (req, res)=>{
    // console.log(req.files);
    var file = req.files.image;

    console.log(file);
    file.mv(__dirname+"/assets/images/"+file.name, (err)=>{
        // console.log("uploaded success");
        res.send({ path : "http://localhost:3000/images/"+file.name })
    })
})



app.listen(3000);