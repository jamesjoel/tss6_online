var routes = require("express").Router();
var AboutCtrl = require("../controllers/AboutController");

routes.get("/", AboutCtrl.index);

module.exports = routes;