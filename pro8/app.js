var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var upload = require("express-fileupload");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(upload());

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.post("/", (req, res)=>{
    // console.log(req.files);
    var photo = req.files.photo;
    var name = photo.name;

    var arr = name.split("."); // hello.10.doc   --- ["hello", "10", "doc"]
    var ext = arr[arr.length-1];

    if(ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif")
    {

        // inset code here
        photo.mv(__dirname+"/assets/"+name, function(err){
            console.log("file upload");
        })
    }
    else{
        console.log("this file type not allwoed");
    }

})

app.listen(3000, ()=>{
    console.log("running");
})