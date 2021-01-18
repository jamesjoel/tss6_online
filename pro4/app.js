var express = require("express");
var app = express();

app.set("view engine", "ejs");

// app.set("views", "pages");

app.use(express.static(__dirname+"/assets"));
// the app.use() method auto call when any other route call



app.get("/", (req, res)=>{
    var pageData = { title : "Home Page", pagename : "home" };
    res.render("layout", pageData);
});
app.get("/about", (req, res)=>{
    var pageData = { title : "About Page", pagename : "about" };
    res.render("layout", pageData);
});
app.get("/contact", (req, res)=>{
    var pageData = { title : "Contact Us Page", pagename : "contact" };
    res.render("layout", pageData);
});
app.get("/help", (req, res)=>{
    var pageData = { title : "Help Page", pagename : "help" };
    res.render("layout", pageData);
});

app.get("/service", (req, res)=>{
    var pageData = { title : "Service Page", pagename : "service" };
    res.render("layout", pageData);
});



app.listen(3000, ()=>{
    console.log("server running");
});


/*
    app.listen()

    app.get()
    app.set()
    app.use()





*/