exports.index = (req, res)=>{
    var pageData = { title : "Home", pagename : "home/index"};
    res.render("layout", pageData);
}