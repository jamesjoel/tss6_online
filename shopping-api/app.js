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

var port = 3000;
app.listen(port, ()=>{
    console.log("server running on port : ", port);
})