exports.index = (req, res)=>{
    // console.log(req.params);
    var type = req.params.type;
    var pageData = { title : "Upload", pagename : "upload/index", type : type};
    res.render("layout", pageData);
}
exports.do_upload=(req, res)=>{
    console.log(req.files);
}