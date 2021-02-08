var routes = require("express").Router();
var FileCtrl = require("../controllers/FileController");

routes.get("/delete/:id/:type", FileCtrl.delete);

routes.get("/edit/:id/:type", FileCtrl.edit);

routes.post("/edit/:id/:type", FileCtrl.update);

module.exports = routes;