var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: answer
});

app.get("/", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (error, results) {
    if (error) throw error;
    // var msg = "We have " + results[0].count + " users";
    // res.send(msg);
    var  count = results[0].count;
    res.render("home", {data: count});
    });
   });

app.post("/register", function(req, res){
    var person = {
        email: req.body.email
    };

    connection.query('INSERT INTO users SET ?', person, function(error, result) {
        if (error) throw error;
        res.redirect("/");
    });
});

app.get("/joke", function(req,res) {
    res.send('Your life');
});

app.listen(3000, () => console.log("Server listening on port 3000!"));

