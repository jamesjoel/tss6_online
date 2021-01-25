var routes = require("express").Router();
var SignupCtrl = require("../controllers/SignupController");

// localhost:3000/signup
routes.get("/", SignupCtrl.index);

// localhost:3000/signup
routes.post("/", SignupCtrl.save);



module.exports = routes;