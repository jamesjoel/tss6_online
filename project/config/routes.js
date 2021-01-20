var routes = require("express").Router();


routes.use("/", require("../rotues/Home"));


module.exports = routes;