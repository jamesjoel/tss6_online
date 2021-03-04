var routes = require("express").Router();
var signupCtrl = require("../controllers/SignupController");
// :3000/api/product
routes.post("/", signupCtrl.save);

module.exports = routes;