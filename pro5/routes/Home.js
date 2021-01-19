var routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("<h2>Home Page</h2>");
});

module.exports = routes;