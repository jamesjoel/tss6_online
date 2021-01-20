const { route } = require("./Home");

var routes = require("express").Router();

var ServiceCtrl = require("../controllers/ServiceController");


routes.get("/", ServiceCtrl.index);

routes.get("/more", ServiceCtrl.more);

routes.get("/more/detail", ServiceCtrl.detail);


module.exports = routes;

/*
    localhost:3000/service
    localhost:3000/service/more
    localhost:3000/service/more/detail


*/