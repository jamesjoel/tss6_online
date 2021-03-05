const { route } = require("../routes/Signup");

var routes = require("express").Router();

routes.use("/api/product", require("../routes/Product"));
routes.use("/api/category", require("../routes/Category"));
routes.use("/api/signup", require("../routes/Signup"));
routes.use("/api/auth", require("../routes/Auth"));


module.exports = routes;