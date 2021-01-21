exports.index = (req, res)=>{
    var pagedata = { title : "Contact", pagename : "contact/index"};
    res.render("layout", pagedata);
}