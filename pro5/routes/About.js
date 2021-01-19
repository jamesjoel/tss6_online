var routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("<h2>About Page</h2>");
});

routes.get("/more", (req, res)=>{
    res.send("<h2>more Page</h2>");
});

routes.get("/info", (req, res)=>{
    res.send("<h2>info Page</h2>");
});



/*
    localhost:3000/about
    localhost:3000/about/more
    localhost:3000/about/info



*/
module.exports = routes;