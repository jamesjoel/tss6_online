var routes = require("express").Router();
var productCtrl = require("../controllers/ProductController");
// :3000/api/product
routes.get("/", productCtrl.getAll);

module.exports = routes;