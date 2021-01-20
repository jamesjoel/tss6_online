var routes = require("express").Router();
var ContactCtrl = require("../controllers/ContactController");


routes.get("/", ContactCtrl.index);


routes.get("/local", ContactCtrl.abc);


routes.get("/global", ContactCtrl.xyz);



/*

    localhost:3000/contact
    localhost:3000/contact/local
    localhost:3000/contact/global

*/

module.exports = routes;