var routes = require("express").Router();


routes.use("/", require("../routes/Home"));
routes.use("/about", require("../routes/About"));
routes.use("/contact", require("../routes/Contact"));
routes.use("/login", require("../routes/Login"));
routes.use("/signup", require("../routes/Singup"));


routes.use("/profile", backdoor, require("../routes/Profile"));
routes.use("/dashboard", backdoor, require("../routes/Dashboard"));
routes.use("/upload", backdoor, require("../routes/Upload"));
routes.use("/share", backdoor, require("../routes/Share"));

routes.use("/file", backdoor, require("../routes/File"));



routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/login");
});



function backdoor(req, res, next)
{
    if(! req.session.is_user_logged_in)
    {
        res.redirect("/login");
        return;
    }
    next();
}



module.exports = routes;