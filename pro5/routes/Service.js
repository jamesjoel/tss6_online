const { route } = require("./Home");

var routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("<h1>Service page</h1>");
});

routes.get("/more", (req, res)=>{
    res.send("<h1>more page</h1>");
});

routes.get("/more/detail", (req, res)=>{
    res.send("<h1>detail page</h1>");
});


module.exports = routes;

/*
    localhost:3000/service
    localhost:3000/service/more
    localhost:3000/service/more/detail


*/