var routes = require("express").Router();


routes.use("/", require("../routes/Home"));
routes.use("/about", require("../routes/About"));
routes.use("/contact", require("../routes/Contact"));




module.exports = routes;