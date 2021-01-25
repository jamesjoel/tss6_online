var routes = require("express").Router();
var LoginCtrl = require("../controllers/LoginController");

routes.get("/", LoginCtrl.index);

module.exports = routes;