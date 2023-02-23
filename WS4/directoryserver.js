var express = require('express');
var app = express();

app.use(express.static('./public/demosite/'));

app.listen(8080);
console.log('8080 is the magic port!');