exports.index = (req, res)=>{
    var pageData = { title : "Login", pagename : "login/index"};
    res.render("layout", pageData);
}