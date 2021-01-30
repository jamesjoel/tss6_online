const { request } = require("express");

var routes = require("express").Router();
var ProfileCtrl = require("../controllers/ProfileController");

routes.get("/", ProfileCtrl.index);

module.exports=routes;