exports.index = (req, res)=>{
    var pageData = { title : "Dashboard", pagename : "profile/dashboard"};
    res.render("layout", pageData);
}