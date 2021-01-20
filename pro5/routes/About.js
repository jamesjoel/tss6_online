var routes = require("express").Router();
var AboutCtrl = require("../controllers/AboutController");


routes.get("/", AboutCtrl.index);

routes.get("/more", AboutCtrl.more);

routes.get("/info", AboutCtrl.info);



/*
    localhost:3000/about
    localhost:3000/about/more
    localhost:3000/about/info



*/
module.exports = routes;