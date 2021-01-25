var routes = require("express").Router();


routes.use("/", require("../routes/Home"));
routes.use("/about", require("../routes/About"));
routes.use("/contact", require("../routes/Contact"));
routes.use("/login", require("../routes/Login"));
routes.use("/signup", require("../routes/Singup"));




module.exports = routes;