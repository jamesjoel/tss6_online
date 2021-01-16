var express = require("express");
var app = express();
// localhost:3000/
app.get("/", (req, res)=>{
    // E:/tss6/pro2/
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", (req, res)=>{
    // E:/tss6/pro2/
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", (req, res)=>{
    // E:/tss6/pro2/
    res.sendFile(__dirname+"/contact.html");
});

/*
    res.send()     -----------  only data send
    res.sendFile() ----------- only file send
    res.render()  ----------  data and file
    res.redirect() ------------- call another url/route

*/


// create our server with 3000
app.listen(3000, ()=>{
    console.log("server running");
});


