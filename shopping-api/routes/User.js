var routes = require("express").Router();
var userCtrl = require("../controllers/UserController");
// :3000/api/product
routes.get("/", userCtrl.index);

module.exports = routes;