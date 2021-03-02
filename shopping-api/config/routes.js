var routes = require("express").Router();

routes.use("/api/product", require("../routes/Product"));
routes.use("/api/category", require("../routes/Category"));

module.exports = routes;