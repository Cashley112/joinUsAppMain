var express = require("express");
var app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/joke", (req, res) => res.send("Your life"));

app.listen(3000, () => console.log("Server listening on port 3000!"));
