var routes = require("express").Router();
var UploadCtrl = require("../controllers/UploadController");

routes.get("/:type", UploadCtrl.index);
routes.post("/:type", UploadCtrl.do_upload);

module.exports = routes;