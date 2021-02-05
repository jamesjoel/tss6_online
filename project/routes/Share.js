var routes = require("express").Router();
var ShareCtrl = require("../controllers/ShareController");

routes.get("/me", ShareCtrl.share_with_me);

routes.get("/:id", ShareCtrl.index);

routes.post("/:id", ShareCtrl.save);


module.exports = routes;