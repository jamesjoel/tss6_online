var express = require("express");
var app = express();
var upload = require("express-fileupload");
var bodyParser = require("body-parser");
var fs = require("fs");


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(upload());


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/", (req, res)=>{
    
    // console.log(req.files);
    req.files.myfile.mv(__dirname+"/assets/"+req.files.myfile.name, (err)=>{
        // console.log("file uploaded");
        fs.readFile(__dirname+"/assets/"+req.files.myfile.name, 'utf8', (err, data)=>{
            // res.writeHead(200, {'Content-Type': 'text/html'});
            // res.write(data);
            console.log("----", data);

        })
    })
})

app.listen(3000, ()=>{
    console.log("running");
})