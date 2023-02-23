var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/list', function (req, res) {
    res.send('Listing data from a file!');
});

app.get('/add', function (req, res) {
    res.send('Lets try to add some data to a file!');
});

app.get('*', function (req, res) {
    res.send('Can\'t find the requested page');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});