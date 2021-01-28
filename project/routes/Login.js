var routes = require("express").Router();
var LoginCtrl = require("../controllers/LoginController");

routes.get("/", LoginCtrl.index);
routes.post("/", LoginCtrl.auth);

module.exports = routes;