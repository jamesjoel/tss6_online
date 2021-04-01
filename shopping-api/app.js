var express = require("express");
var app = express();
var routes = require("./config/routes");
var cors = require("cors");


var bodyParser = require("body-parser");

app.use(express.static(__dirname+"/assets"));


app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use(routes);

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})



app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})













var port = 3000;
app.listen(port, ()=>{
    console.log("server running on port : ", port);
})