var routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("<h2>Contact Page</h2>");
});
routes.get("/local", (req, res)=>{
    res.send("<h2>Contact -> local Page</h2>");
});
routes.get("/global", (req, res)=>{
    res.send("<h2>Contact -> global Page</h2>");
});



/*

    localhost:3000/contact
    localhost:3000/contact/local
    localhost:3000/contact/global

*/

module.exports = routes;