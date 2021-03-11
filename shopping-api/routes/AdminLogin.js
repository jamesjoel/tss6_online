var routes = require("express").Router();
var adminLoginCtrl = require("../controllers/AdminLoginController");
// :3000/api/product
routes.post("/", adminLoginCtrl.index);

module.exports = routes;