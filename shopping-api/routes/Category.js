var routes = require("express").Router();
var categoryCtrl = require("../controllers/CategoryController");
// :3000/api/product
routes.get("/", categoryCtrl.getAll);

module.exports = routes;