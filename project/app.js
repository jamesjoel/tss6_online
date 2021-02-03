var express = require("express");
var app = express();
var routes = require("./config/routes");


var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("express-flash");
var upload = require("express-fileupload");

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.use(express.static(__dirname+"/files"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(session({ secret : "hello" }));
app.use(flash());
app.use(upload());

app.use(function(req, res, next){
    res.locals.session = req.session;
    res.locals.url=req.originalUrl;
    // console.log(req.originalUrl); // get current url
    next();
});
// localhost:3000/about

app.use(routes);

var port = 3000;
app.listen(port, ()=>{
    console.log("server running on port : ", port);
})