var express = require("express");
var app = express();
var mysql = require("mysql");

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "tss6",
});

/*
    SELECT * FROM

    INSERT INTO table (col1, col2, col3, .... ) VALUES ('value1', 'value2', .... )


    DELETE FROM table WHERE id = 5

    UPDATE table SET col1 = 'value1', col2 = 'value2', .... WHERE id = 5

*/


app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    con.connect(function(err){
        con.query("SELECT * FROM student", function(err, result){
            // console.log(result);
            var data = JSON.parse(JSON.stringify(result));
            console.log(data);
            res.render("home", { result : data });
        });        
    });


})


app.listen(3000, ()=>{
    console.log("running");
})