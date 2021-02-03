var routes = require("express").Router();
var ShareCtrl = require("../controllers/ShareController");

routes.get("/:id", ShareCtrl.index);

module.exports = routes;