var express = require("express");
var app = express();


var routes = require("./config/routes");

app.set("view engine", "ejs");

app.use(routes);

// app.use("/hello", routes);

// localhost:3000/about


app.listen(3000, ()=>{
    console.log("server running");
})