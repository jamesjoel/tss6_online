var routes = require("express").Router();
var authCtrl = require("../controllers/AuthController");
// :3000/api/product
routes.post("/", authCtrl.index);

module.exports = routes;