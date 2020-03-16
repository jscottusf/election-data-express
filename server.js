const express = require("express");
const path = require("path");
const bodyParser = require('body-parser') // middleware for parsing the body of a request
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname, "assets/javascript/app.js"));
});

app.get('/states', function(req, res) {
    res.sendFile(path.join(__dirname, "assets/javascript/states.js"));
});

app.get('/jquery.csv', function(req, res) {
    res.sendFile(path.join(__dirname, "assets/javascript/jquery.csv.js"));
});

app.get('/style', function(req, res) {
    res.sendFile(path.join(__dirname, "assets/css/style.css"))
})

app.get('/election', function(req, res) {
    res.sendFile(path.join(__dirname, "assets/images/election.jpeg"))
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});