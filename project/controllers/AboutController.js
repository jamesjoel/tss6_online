exports.index = (req, res)=>{
    var pagedata = { title : "About", pagename : "about/index"};
    res.render("layout", pagedata);
}