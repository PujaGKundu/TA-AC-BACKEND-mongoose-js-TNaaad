var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to Database");
});

var app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, () => {
  console.log("Server listening to port 3k");
});
