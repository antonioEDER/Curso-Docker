var express = require('express');

// New Code
var monk = require('monk');
var db = monk('mongo:27017/nodetest1');

var app = express();
const cors = require('cors')
app.use(cors())

// MIdlle
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.get('/', function (req, res) {
    res.end(JSON.stringify({ text: 'Heelo world!' }));
});

app.post('/add', function (req, res) {
    var db = req.db;   
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    var collection = db.get('usercollection');

    collection.insert({
        "username": userName,
        "email": userEmail
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.end(JSON.stringify({ text: 'Saved successfully' }));
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});