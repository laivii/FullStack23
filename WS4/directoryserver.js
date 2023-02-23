var express = require('express');
var app = express();

app.use(express.static('public/demosite/'));

app.get("/", function(req, res) {
    response.send();
});

app.listen(8080);
console.log('8080 is the magic port!');