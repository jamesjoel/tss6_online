var routes = require("express").Router();

routes.use("/api/product", require("../routes/Product"));

module.exports = routes;