var express = require("express");
var app = express();

// decleare view/template engine for the application
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    var a = "rohit";

    var obj = { name1 : a, name2 : "nidhi" };

    res.render("home", obj);
});




app.get("/", (req, res)=>{

});











app.listen(3000, ()=>{
    console.log("server running");
})