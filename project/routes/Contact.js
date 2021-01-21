var routes = require("express").Router();
var ContactCtrl = require("../controllers/ContactController");

routes.get("/", ContactCtrl.index);

module.exports = routes;