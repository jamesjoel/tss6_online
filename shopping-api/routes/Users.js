var routes = require("express").Router();
var usersCtrl = require("../controllers/UsersController");
// :3000/api/product
routes.get("/", usersCtrl.getAll);

module.exports = routes;