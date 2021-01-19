var routes = require("express").Router();

var Home = require("../routes/Home");
var About = require("../routes/About");
var Contact = require("../routes/Contact");
var Service = require("../routes/Service");

// routes.get("/", (req, res)=>{
//     console.log("home page");
// });

// routes.get("/about", (req, res)=>{
//     console.log("about page");
// });


routes.use("/", Home);
routes.use("/about", About);
routes.use("/contact", Contact);
routes.use("/service", Service);

/*

    localhost:3000/contact
    localhost:3000/contact/local
    localhost:3000/contact/global

*/


module.exports = routes;

