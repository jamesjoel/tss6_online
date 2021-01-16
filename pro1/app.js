var express = require("express");
var app = express();
// localhost:3000
// localhost:3000/about
// localhost:3000/contact
// localhost:3000/help
// localhost:3000/services

/*
    res.send()        -------------- only data send
    res.sendFile()    -------------- send file
    res.render()      -------------- file and data both
    res.redirect()    -------------- call another route


*/


app.get("/", (req, res)=>{

    // E:/tss6/pro1/home.html
    res.sendFile(__dirname+"/home.html");

});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", (req, res)=>{

});
app.get("/help", (req, res)=>{

});
app.get("/services", (req, res)=>{

});





app.listen(3000, ()=>{
    // console.log(__dirname);
    console.log("server running");
});