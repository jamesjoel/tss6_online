var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({ secret : "hello"}));


app.get("/", (req, res)=>{
    req.session.name = "rohit";
    res.send("<h1>Home Page");
});

app.get("/show", (req, res)=>{
    console.log(req.session);
})



app.listen(3000, function(){
    console.log("running");
})